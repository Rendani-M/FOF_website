import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from './PaymentForm';

const PUBLIC_KEY= 'pk_test_51MWdAaBp3o0rcVWnshlGqshxeVUXW20RDvwwdvAgm3chialQzwPrm5M2uQmzzUO0jUtEpLcCt3WFAlan2xQDml8800NTzhmWYU';
const stripeTestPromise= loadStripe(PUBLIC_KEY);

function StripeContainer() {
  return (
    <div style={{ width: '70%', height: '30%' }}>
      <Elements stripe={stripeTestPromise}>
          <PaymentForm/>
      </Elements>
    </div>
  )
}

export default StripeContainer