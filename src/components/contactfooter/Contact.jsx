import React, { useEffect, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { db } from '../../firebase';
import { ref as databaseRef, onValue } from "firebase/database";

function Contact() {
  const [contactsCard, setContactsCard] = useState({});
  useEffect(() => {
      firebaseGetAll();
  }, []);

  function firebaseGetAll() {
      const usersRef = databaseRef(db, 'admin/contacts');
      onValue(usersRef, (snapshot) => {
          const data = snapshot.val();
          setContactsCard(data);
      });
  }

  return (
    <Box sx={{ 
               display:'flex', 
               alignItems:{ xs: 'center', md:'start' },
               justifyContent:{ xs: 'center', md: 'space-around' },
               gap:'2em',
               padding:'2em',
               flexDirection: { xs: 'column', md: 'row' }, 
               backgroundImage: 'linear-gradient(to right, #11cb87 0%, #2575fc 100%)',
               color: '#fff',
               fontFamily: 'Arial, sans-serif'
            }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', marginBottom: '1em', width:{xs:'100%', sm:'100%', md:'33%'} }}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <EmailIcon />
          <Typography variant="body1">{contactsCard?.email}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <PhoneIcon />
          <Typography variant="body1">{contactsCard?.phone}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <WhatsAppIcon />
          <Typography variant="body1">{contactsCard?.whatsapp}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', marginBottom: '1em', width:{xs:'100%', sm:'100%', md:'33%'} }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <Typography variant="h4" gutterBottom>LOCATION</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Zakariya Park (MAIN BRANCH): </Typography>{contactsCard?.zakariya_park}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Soweto Mofolo: </Typography>{contactsCard?.soweto_mofolo}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Rustervaal:</Typography>{contactsCard?.rustervaal}</Typography>
        </Box>
      </Box>

      <Box sx={{ display:'flex', flexDirection:'column', gap:'2em', marginBottom:'1em', width:{xs:'100%', sm:'100%', md:'33%'} }}>
          <Typography variant="h4" gutterBottom>Social Media</Typography>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <FacebookIcon />
              <Link href={contactsCard?.facebook} color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  Click to go to Facebook
              </Link>
          </Box>
          
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <YouTubeIcon />
              <Link href={contactsCard?.youtube} color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  Click to go to Youtube
              </Link>
          </Box>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <InstagramIcon />
              <Link href={contactsCard?.instagram} color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  Click to go to Instagram
              </Link>
          </Box> 
      </Box>
    </Box>
  )
}

export default Contact;
