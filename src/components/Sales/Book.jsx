import { Box, Typography } from '@mui/material';
import React from 'react'
import CardEvent from '../../card/cardevent/CardEvent';
const bookCard = [
    {
        title:'BORN FOR THE SUPERNATURAL',
        desc:`PRE-ORDERS for the book are now available.
            This is a limited offer only for the 1st 50 orders. All pre-ordered copies will be signed by Apostle Makhavhu and available for collection on the day of the launch.
            DO NOT MISS OUT on this special offer. Order yours today.
            You can make an EFT payment using the account details on the facebook page`,
        img:"Apostle-book.jpg",
        date:"19/08/2023"
    }
];
function Book() {
  return (
    <Box sx={{  width:'100%', 
                height:'50%', 
                display:'flex', 
                alignItems:'center', 
                padding:{xs: '0 1em', sm:'5em 8em', md:'5em 20em', lg:'5em 20em'},
                paddingBottom:'13em',
                flexDirection:'column', 
                justifyContent:'center', 
                backgroundColor: '#ecececc0'}}>
        <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
            Book
        </Typography>
        <CardEvent title={bookCard[0].title} desc={bookCard[0].desc} img={bookCard[0].img} focus={false} scripture={false}/>
    </Box>
  )
}

export default Book