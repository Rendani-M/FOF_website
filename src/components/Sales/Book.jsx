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
        img:"https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/401088340_715703763924834_2079001820588133996_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGReIh6WDjdwM2fH8iT9DYvF3JlKb9c0JsXcmUpv1zQm3IeyiSgLMEpMPgfR7mrZ2SfHlv0Lil9g-gSDJue5A9m&_nc_ohc=dxVwz5g6qrcAX-_GV8i&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDWZpazNg-L13Oo7DFKfQfCJhtLlD_aTGl7-bAovcrtEw&oe=6562A7B5",
        date:"19/08/2023"
    }
];
function Book() {
  return (
    <Box sx={{  width:'100%', 
                height:'100%', 
                display:'flex', 
                alignItems:'center', 
                padding:{xs: '0 1em', sm:'5em 8em', md:'20em 25em', lg:'20em 25em'},
                paddingBottom:'13em',
                flexDirection:'column', 
                justifyContent:'center', 
                backgroundColor: '#ecececc0'}}>
        <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
            Book
        </Typography>
        <CardEvent title={bookCard[0].title} desc={bookCard[0].desc} img={bookCard[0].img} focus={false}/>
    </Box>
  )
}

export default Book