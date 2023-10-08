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
              width: "175%",
              height: "175%",
              top: "-40%",
              left:'-40%',
              zIndex: "-1",
                border:'2px solid red'
            }}
        >
            <source src='FOF_Animated_Background.mp4' type="video/mp4" />
        </video>
        <img src='church_logo.png' alt=''>
        </img>
    </Box>
  )
}

export default Intro;
