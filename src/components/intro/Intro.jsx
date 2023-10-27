import { Box } from '@mui/material';
import React from 'react'; 

function Intro() {
  return (
    <Box
        sx={{
            position: 'relative',
            height:'100vh', 
            overflow: 'hidden',
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
        }}
        >
        <video autoPlay loop muted
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: 'cover', // Add this line
              zIndex: "-1"
            }}
        >
            <source src='FOF_Animated_Background.mp4' type="video/mp4" />
        </video>
        <img 
          src='church_logo.png' 
          alt=''
          style={{
            maxWidth: "90%", // This will make the image responsive
            maxHeight: "90%", // Adjust as needed
            objectFit: 'contain' // This will maintain the aspect ratio of the image
          }}
        />
    </Box>
  )
}

export default Intro;
