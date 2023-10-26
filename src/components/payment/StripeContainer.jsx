import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from './PaymentForm';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const PUBLIC_KEY= 'pk_test_51MWdAaBp3o0rcVWnshlGqshxeVUXW20RDvwwdvAgm3chialQzwPrm5M2uQmzzUO0jUtEpLcCt3WFAlan2xQDml8800NTzhmWYU';
const stripeTestPromise= loadStripe(PUBLIC_KEY);

function StripeContainer() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const style = {
    width: isXs ? '95vw' : isSm ? '85vw' : '60vw',
    height: isXs ? '95%' : isSm ? '90%' : '70%', 
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    bgcolor: '#ffffff',
    margin:'0 1em'
  };

  return (
    <Box sx={style}>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
      </Elements>
    </Box>
  );
}

export default StripeContainer;
