import axios from 'axios';
import React, { useEffect } from 'react'
const myData = 
{
  "merchant_id": "10004002", 
  "merchant_key": "q1cd2rdny4a53",
  "return_url": "https://flamesoffireministries.co.za/return",
  "cancel_url": "https://flamesoffireministries.co.za/cancel",
  "notify_url": "https://flamesoffireministries.co.za/notify",
  "name_first": "Rendani",
  "name_last": "Makhavhu",
  "email_address": "makhavhurendani@gmail.com",
  "m_payment_id": "1",
  "amount": 7.00,
  "item_name": "#offering"
};
function Notify2() {

  useEffect(() => {
    // if (success) {
      console.log("Notify2")
      axios.post('https://payment-api-obbu.onrender.com/confirmation', myData)
        .then(response => {
          console.log('Confirmation response:', response.data);
        })
        .catch(error => {
          console.error('Error during confirmation:', error);
        });
    // }
  }, []);
  return (
    <div>Notify2</div>
  )
}

export default Notify2