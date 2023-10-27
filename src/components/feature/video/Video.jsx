import { Box, Typography } from '@mui/material'
import React from 'react'
import CardVideo from '../../../card/cardVideo/CardVideo'

function Video() {
  return (
    <Box sx={{  width:'100%', 
                height:'100%', 
                display:'flex', 
                alignItems:'center', 
                padding:'2em 0',
                paddingBottom:'13em',
                flexDirection:'column', 
                justifyContent:'center', 
                backgroundColor: '#ecececc0'}}>
        <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
            Most Popular Video
        </Typography>
        <CardVideo/>
    </Box>
  )
}

export default Video