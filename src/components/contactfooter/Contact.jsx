import { Box, Typography } from '@mui/material';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { YouTube } from '@mui/icons-material';

function Contact() {
  return (
    <Box sx={{ 
               display:'flex', 
               alignItems:'center', 
               justifyContent:'center',
               gap:'10em',
               padding:'2em 0',
               flexDirection:'row', 
               backgroundImage: 'linear-gradient(to right, #11cb87 0%, #2575fc 100%)',
               color: '#fff',
               fontFamily: 'Arial, sans-serif'
            }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', marginBottom: '1em' }}>
        <Typography variant="h4" gutterBottom>Contact Us</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <EmailIcon />
          <Typography variant="body1">email@example.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <PhoneIcon />
          <Typography variant="body1">+1234567890</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <WhatsAppIcon />
          <Typography variant="body1">+1234567890</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', marginBottom: '1em' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <Typography variant="h4" gutterBottom>LOCATION</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <EmailIcon />
          <Typography variant="body1">Zakariya Park (MAIN BRANCH): </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <PhoneIcon />
          <Typography variant="body1">Soweto Mfolo: </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <WhatsAppIcon />
          <Typography variant="body1">Rustavaal: </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2em', marginBottom: '1em' }}>
        <Typography variant="h4" gutterBottom>Social Media</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <FacebookIcon />
          <Typography variant="body1">Link</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <YouTube/>
          <Typography variant="body1">Link</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <InstagramIcon />
          <Typography variant="body1">Link</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact;
