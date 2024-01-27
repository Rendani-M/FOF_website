import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardEvent from '../../card/cardevent/CardEvent';
import { db } from '../../firebase';
import { ref as databaseRef, onValue } from "firebase/database";

function About() {
    const [eventCard, setEventCard] = useState([]);
    useEffect(() => {
        firebaseGetAll();
    }, []);

    function firebaseGetAll() {
        const usersRef = databaseRef(db, 'admin/About');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = [];
            for(let id in data){
                dataArray.push(data[id]);
            }
            setEventCard(dataArray);
        });
    }

  return (
    <Box sx={{ 
               width:'100%', 
               height:'100%', 
               display:'flex', 
               alignItems:'center', 
               justifyContent:'center',
               padding:'10em 0em',
               flexDirection:'column',
               backgroundColor: '#ecececc0',
               color: '#000',
          }}>
        <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
            ABOUT
        </Typography>
        <Box sx={{ width:{sx:'100%', sm:'95%'}, height:'100%', 
            display:'flex', alignItems:'center', padding:{xs:'1em', sm:'2em', md:'0'}, 
            flexDirection:{xs:'column', sm:'column' ,md:'row'}, justifyContent:'space-around', gap:'1em'}}>
            <CardEvent title={eventCard[0]?.title} desc={eventCard[0]?.desc} img={eventCard[0]?.img} focus={true} scripture={false}/>
            <CardEvent title={eventCard[1]?.title} desc={eventCard[1]?.desc} img={eventCard[1]?.img} focus={true} scripture={false}/>
            <CardEvent title={eventCard[2]?.title} desc={eventCard[2]?.desc} img={eventCard[2]?.img} focus={true} scripture={false}/>
                
        </Box>
    </Box>
  )
}

export default About;