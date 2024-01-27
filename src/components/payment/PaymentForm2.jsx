import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Box, TextField } from '@mui/material';
import { ref as databaseRef, set } from "firebase/database";
import { db } from '../../firebase';
import { OpenContext } from '../../Context/OpenContext';
const queryString = require('query-string');

const myData = 
{
  "merchant_id": process.env.REACT_APP_MERCHANT_ID, 
  "merchant_key": process.env.REACT_APP_MERCHANT_KEY,
  "return_url": process.env.REACT_APP_RETURN,
  "cancel_url": process.env.REACT_APP_CANCEL,
  "notify_url": process.env.REACT_APP_NOTIFY,
  "name_first": "WEBSITE",
  "name_last": "FOF",
  "email_address": process.env.REACT_APP_EMAIL,
  "m_payment_id": process.env.REACT_APP_PAY_ID,
  "amount": 7.00,
  "item_name": "#offering"
};

function PaymentForm2(props) {
  const [success, setSuccess] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [warning, setWarning] = useState(false);
  const { desc } = useContext(OpenContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (amount < minimumAmount) {
      setWarning(true);
      return;
    }

    try {
      myData.amount= amount;
      myData.item_name= desc;
      const response = await axios.post('https://payment-api-obbu.onrender.com/payment', myData);
      
      if (response.data !== null) {
        const pfParamString = response.data; 
        console.log('myData', myData);
        console.log('Successful payment', pfParamString);
        const result = await generatePaymentIdentifier(pfParamString);
        console.log('result', result);

        // Trigger the PayFast payment modal
        // if (window.payfast_do_onsite_payment) {
        if (result !== null) {
          // window.payfast_do_onsite_payment({"uuid": result});
          // axios.post('https://payment-api-obbu.onrender.com/confirmation', myData)
          // .then(response => {
          //   console.log('Confirmation response:', response.data);
          // })
          // .catch(error => {
          //   console.error('Error during confirmation:', error);
          // });
          console.log("hello");
          const inputData = {
            amount: amount,
            desc: desc,
            key: '', // This will be set in firebaseWrite
          };
          // firebaseWrite(inputData);
          
        } else {
          console.error('PayFast function not found');
        }

        setSuccess(true);
        props.handleClose();
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  function firebaseWrite(inputData) {
    return new Promise((resolve, reject) => {
      const now = new Date();
      now.setHours(now.getHours() + 2);
      const date = now.toISOString().slice(0,10).replace(/-/g,"");
      const time = now.toISOString().slice(11,19).replace(/:/g,"");
      const key= date+time;
      inputData.key = key;
      inputData.date = date;
      inputData.time = time;
  
      // Set data in Firebase
      set(databaseRef(db, `admin/Payment/history/${date}/${time}`), inputData)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.error("Error during firebaseWrite:", error);
          reject(error);
        });
    });
  }

  const generatePaymentIdentifier = async (pfParamString) => {
    const params = new URLSearchParams(pfParamString);
    const pfParamObject = Object.fromEntries(params);
    const result = await axios.post('https://www.payfast.co.za/onsite/process', pfParamObject)
        .then((res) => {
          return res.data.uuid || null;
        })
        .catch((error) => {
          console.error(error)
        });
    return result;
  };

  useEffect(() => {
    axios.get(`https://v6.exchangerate-api.com/v6/9f050aa8d0a260fc321182c1/latest/GBP`)
      .then(response => {
        const exchangeRate = response.data.conversion_rates.ZAR;
        setExchangeRate(exchangeRate);
        setMinimumAmount(Math.round(0.3 * exchangeRate)); // 30 pence in ZAR
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Box sx={{ padding: "0 1em", marginTop: "20px", marginBottom: "20px", width:'90%' }}>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom style={{ marginBottom: "20px" }}>
            Enter details:
          </Typography>
          {warning && <Typography variant="body1" style={{ color: 'red', marginBottom: "20px" }}>
            Warning: The amount entered is less than the minimum amount.
          </Typography>}
          <input type="hidden" name="" value={{ exchangeRate }}/>
          
          <TextField 
            id="amount" 
            label="Amount" 
            variant="outlined" 
            fullWidth 
            style={{ marginBottom: "20px" }} 
            value={amount} 
            onChange={(e) => {
              setAmount(e.target.value);
              setWarning(e.target.value < minimumAmount);
            }} 
          />
          <Typography variant="body1" style={{ marginBottom: "20px", color:'red' }}>
            Minimum amount: R {minimumAmount}
          </Typography>
          <Button type="submit" variant="contained" color="primary">
            Pay Now
          </Button>
        </form>
      ) : (
        <Typography variant="h6" gutterBottom>
          Payment Successful!
        </Typography>
      )}</Box>
    );
}

export default PaymentForm2;
