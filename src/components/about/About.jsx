import { Box, Typography } from '@mui/material';
import React from 'react';
import CardEvent from '../../card/cardevent/CardEvent';

function About() {
  const eventCard = [
      {
          title:'MISSION',
          desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
          img:"Mission.png"
      },
      {
          title:'VERSE OF THE DAY',
          desc:'John 3:16 [NKJV] For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
          img:"Bible_Quote.png"
      },
      {
          title:'QUOTE',
          desc:"As a pastor, I am humbled and honored to walk beside you on your spiritual journey. Together, let us seek God's light in every moment, for it is in the darkest times that His love shines brightest. - [Apostle Alfred Makhavhu]",
          img:"Quote.png"
      },
      {
          title:'Title 4',
          desc:'Description4'
      },
      {
          title:'Title 5',
          desc:'Description5'
      }
  ];

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
        <Typography variant='h3' sx={{ mb:'1em', color:'black' }}>
            ABOUT
        </Typography>
        <Box sx={{ width:'95%', height:'100%', 
            display:'flex', alignItems:'center', padding:{xs:'2em', sm:'2em', md:'0'},
            flexDirection:{xs:'column', sm:'column' ,md:'row'}, justifyContent:'space-around', gap:'1em'}}>
            <CardEvent title={eventCard[0].title} desc={eventCard[0].desc} img={eventCard[0].img} focus={true}/>
            <CardEvent title={eventCard[1].title} desc={eventCard[1].desc} img={eventCard[1].img} focus={true}/>
            <CardEvent title={eventCard[2].title} desc={eventCard[2].desc} img={eventCard[2].img} focus={true}/>
                
        </Box>
    </Box>
  )
}

export default About;