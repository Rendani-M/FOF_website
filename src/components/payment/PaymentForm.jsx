import React, { useEffect, useState } from 'react';
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, InputAdornment, TextField } from '@mui/material';

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ff0000",
      color: "#ff0000"
    }
  }
};

function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [minimumAmount, setMinimumAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const stripe = useStripe();
    const elements = useElements();
    // const theme = useTheme();
    // const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    
    const [isXs, setIsXs] = useState(window.innerWidth < 600);
    
    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/9f050aa8d0a260fc321182c1/latest/GBP`)
          .then(response => {
            const exchangeRate = response.data.conversion_rates.ZAR;
            setExchangeRate(exchangeRate);
            setMinimumAmount(Math.round(0.3 * exchangeRate)); // 30 pence in ZAR
          })
          .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post('http://localhost:4050/payment', {
            amount: amount, // Use the entered amount here
            id,
          });
  
          if (response.data.success) {
            console.log('Successful payment');
            setSuccess(true);
          }
        } catch (error) {
          console.log('error', error);
        }
      } else {
        console.log('error', error.message);
      }
    };

    useEffect(() => {
      const handleResize = () => {
        setIsXs(window.innerWidth < 600);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      
      <Box sx={{ padding: "0 1em", marginTop: "20px", marginBottom: "20px", width:'90%' }}>
          {!success ? (
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom style={{ marginBottom: "20px" }}>
                Enter your card details:
              </Typography>
              {isXs ? (
                <>
                <div className="FormGroup" style={{ marginBottom: "20px", border:'1px solid', padding:'1em', borderRadius:'0.2em' }}>
                  <div className="FormRow">
                    <CardNumberElement options={CARD_OPTIONS} />
                  </div>
                </div>
                <div className="FormGroup" style={{ marginBottom: "20px", border:'1px solid', padding:'1em', borderRadius:'0.2em' }}>
                  <div className="FormRow">
                    <CardExpiryElement options={CARD_OPTIONS} />
                  </div>
                </div>
                <div className="FormGroup" style={{ marginBottom: "20px", border:'1px solid', padding:'1em', borderRadius:'0.2em' }}>
                  <div className="FormRow">
                    <CardCvcElement options={CARD_OPTIONS} />
                  </div>
                </div>
                </>
              ) : (
                <div className="FormGroup" style={{ marginBottom: "20px", border:'1px solid', padding:'1em', borderRadius:'0.2em' }}>
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </div>
              )}
              <TextField // Modify this block
                label="Amount"
                type="number"
                inputProps={{ min: "0", step: "0.01" }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">ZAR</InputAdornment>,
                }}
                style={{ marginBottom: "10px" }}
              />
              <Typography variant="body1" color="textSecondary" component="p" sx={{ paddingY:'1em' }}>
                The exchangeRate is {exchangeRate}, and the minimum payment amount is {minimumAmount.toFixed(2)} ZAR.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Pay
              </Button>
            </form>
          ) : (
            <Typography variant="h4" align="center" color="primary">
              Payment Successful 🎉
            </Typography>
          )}
      </Box>
    );
      
}

export default PaymentForm;
