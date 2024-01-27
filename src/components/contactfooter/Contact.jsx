import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
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
          <Typography variant="body1">info@flamesoffire.co.za</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <PhoneIcon />
          <Typography variant="body1">(+27)11 859 1030</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <WhatsAppIcon />
          <Typography variant="body1">(+27)833077132</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', marginBottom: '1em', width:{xs:'100%', sm:'100%', md:'33%'} }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <Typography variant="h4" gutterBottom>LOCATION</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Zakariya Park (MAIN BRANCH): </Typography>797 Clove drive Zakariya Park, Johannesburg</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Soweto Mofolo: </Typography>732 Ramapulane street, Mofolo South, Soweto</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5em' }}>
          <LocationOnIcon />
          <Typography variant="body1"><Typography variant="body1" sx={{ color:'blue', fontWeight:'bold' }}>Rustervaal:</Typography> 660 Ramaphosa Settlement, Rustervaal</Typography>
        </Box>
      </Box>

      <Box sx={{ display:'flex', flexDirection:'column', gap:'2em', marginBottom:'1em', width:{xs:'100%', sm:'100%', md:'33%'} }}>
          <Typography variant="h4" gutterBottom>Social Media</Typography>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <FacebookIcon />
              <Link href="https://www.facebook.com/keflamesoffire" color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  https://www.facebook.com/keflamesoffire
              </Link>
          </Box>
          
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <YouTubeIcon />
              <Link href="https://www.youtube.com/@flamesoffireministriesfof6097" color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  https://www.youtube.com/@flamesoffireministriesfof6097
              </Link>
          </Box>
          <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center', gap:'0.5em' }}>
              <InstagramIcon />
              <Link href="https://www.instagram.com/flamesoffire.ministries/" color="inherit" underline='none' sx={{ wordBreak:"break-all" }}>
                  https://www.instagram.com/flamesoffire.ministries/
              </Link>
          </Box> 
      </Box>
    </Box>
  )
}

export default Contact;
