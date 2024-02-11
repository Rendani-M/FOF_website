import React, { useEffect, useState } from 'react';
import { Box, Button, CssBaseline, Link, Modal, ThemeProvider, Typography, createTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { db } from '../../firebase';
import { ref as databaseRef, onValue } from "firebase/database";
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar {
          width: 0px;
        }
      `,
    },
  },
});

function Contact() {
  const [contactsCard, setContactsCard] = useState({});
  const [openDeclaimer, setOpenDeclaimer] = useState(false);
  const handleOpen = () => setOpenDeclaimer(true);
  const handleClose = () => setOpenDeclaimer(false);

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
      <Button onClick={handleOpen} size="small" sx={{ color:'white', border:'1px solid white', padding:'0.5em' }}>© 2024 Flames of Fire Ministries</Button>
      <Modal
          open={openDeclaimer}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflowY:'auto' }}
      >
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box sx={{ overflowY:'auto',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '70vw', 
                          bgcolor: 'background.paper',
                          boxShadow: 24,
                          p: 0,
                          maxHeight:'70vh', 
                          display: 'flex',
                          justifyContent:'space-between' }}>
                  
                  <Box sx={{ display:'flex', flexDirection:{xs:'column-reverse', sm:'column-reverse', md:'row'}, height:'auto' }}>
                      <Box sx={{ padding:'2em 2em', width:'100%', overflow:'visible', maxHeight:{xs:'70%',sm:'70%',md:'100%'} }}>
                          <Typography id="modal-modal-title" variant="h6" component="h2">
                            Copyright Notice
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{
                              overflow: 'hidden', textAlign:'justify'
                          }}>
                              © 2024 Flames of Fire Ministries. All rights reserved.
                              The content, design, and functionality of this website are protected by copyright law. 
                              No part of this website may be reproduced, distributed, or transmitted in any form or 
                              by any means without prior written permission from Flames of Fire Ministries.

                              Unauthorized use of any material on this website, including text, images, logos, and 
                              graphics, is strictly prohibited. Any infringement will be subject to legal action.

                              For inquiries or permissions, please contact us at: info@flamesoffireministries.co.za.
                          </Typography>
                      </Box>
                  </Box>
              </Box>
          </ThemeProvider>
      </Modal>
    </Box>
  )
}

export default Contact;