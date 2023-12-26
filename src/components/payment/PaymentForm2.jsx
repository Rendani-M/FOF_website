import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Box, TextField } from '@mui/material';
// import { ref, set, onValue } from "firebase/database";
// import { db } from '../../firebase';
// "merchant_id": "23522210",
//   "merchant_key": "au717fohgkyuz",
// Username:     sbtu01@payfast.io
// Password:     clientpass
// Define your data
const myData = 
{
  "merchant_id": "23522210", 
  "merchant_key": "au717fohgkyuz",
  "return_url": "https://flamesoffireministries.co.za/return",
  "cancel_url": "https://flamesoffireministries.co.za/cancel",
  "notify_url": "https://flamesoffireministries.co.za/notify",
  "name_first": "Rendani",
  "name_last": "Makhavhu",
  "email_address": "makhavhurendani@gmail.com",
  "m_payment_id": "1",
  "amount": 4.00,
  "item_name": "#offering"
};

function PaymentForm2(props) {
  const [success, setSuccess] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [minimumAmount, setMinimumAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [warning, setWarning] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (amount < minimumAmount) {
      setWarning(true);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4050/payment', myData);
      
      if (response.data !== null) {
        const pfParamString = response.data; 
        console.log('Successful payment', pfParamString);
        const result = await generatePaymentIdentifier(pfParamString);
        console.log('result', result);

        // Trigger the PayFast payment modal
        if (window.payfast_do_onsite_payment) {
        // if (result !== null) {
          window.payfast_do_onsite_payment({"uuid": result});
          axios.post('http://localhost:4050/confirmation', myData)
          .then(response => {
            console.log('Confirmation response:', response.data);
          })
          .catch(error => {
            console.error('Error during confirmation:', error);
          });
          // firebaseWrite(10, "Rendi", "mr@gmail.com", "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg");
          
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

  // function firebaseWrite(userId, name, email, imageUrl) {
  //   const now = new Date();
  //   now.setHours(now.getHours() + 2);
  //   const date = now.toISOString().slice(0,10).replace(/-/g,"");
  //   const time = now.toISOString().slice(11,19).replace(/:/g,"");

  //   // Set data in Firebase
  //   set(ref(db, `payment/${date}/${time}`), {
  //     amount : 7.00
  //   });

  //   const usersRef = ref(db, 'payment/');
  //   onValue(usersRef, (snapshot) => {
  //     const data = snapshot.val();
  //     // updateusers(postElement, data);
  //     console.log("data", data);
  //   });
  // }

  const generatePaymentIdentifier = async (pfParamString) => {
    const result = await axios.post(`https://www.payfast.co.za/onsite/process`, pfParamString)
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

  // useEffect(() => {
  //   if (success) {
  //     axios.post('http://localhost:4050/confirmation', myData)
  //       .then(response => {
  //         console.log('Confirmation response:', response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error during confirmation:', error);
  //       });
  //   }
  // }, [success]);

  return (
    <Box sx={{ padding: "0 1em", marginTop: "20px", marginBottom: "20px", width:'90%' }}>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom style={{ marginBottom: "20px" }}>
            Enter your card details:
          </Typography>
          {warning && <Typography variant="body1" style={{ color: 'red', marginBottom: "20px" }}>
            Warning: The amount entered is less than the minimum amount.
          </Typography>}
          <input type="hidden" name="" value={{ exchangeRate }}/>
          <TextField 
            id="cardNumber" 
            label="Card Number" 
            variant="outlined" 
            fullWidth 
            style={{ marginBottom: "20px" }} 
          />
          <TextField 
            id="cardExpiry" 
            label="Card Expiry" 
            variant="outlined" 
            fullWidth 
            style={{ marginBottom: "20px" }} 
          />
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
