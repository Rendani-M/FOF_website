import { Box, Typography } from '@mui/material';
import React from 'react';
import CardEvent from '../../card/cardevent/CardEvent';

function About() {
  const eventCard = [ 
      {
          title:'MISSION',
          img:"Mission_Image.png",
          desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today."
      },
      {
          title:'VERSE OF THE YEAR',
          img:"Verse_image.png",
          desc:'[Ephesians 2:8-9] “For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.”',
          
      },
      {
          title:'THEME OF THE YEAR',
          img:"Theme_of_the_year.png",
          desc:"Welcome to 'The Year of Turnaround'—a divine journey of transformation and renewal within our church community. As we embrace this empowering theme, we embark on a collective pilgrimage toward positive change, spiritual breakthroughs, and a reawakening of purpose. Together, we'll navigate the year trusting that this year holds the promise of extraordinary shifts in our lives and in the church of Jesus. Join us in prayer, reflection, and action as we seek a profound turnaround in our hearts, our relationships, and our community. May this year be a testament to the miraculous power of faith and the boundless possibilities of a spiritual turnaround.",
          
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
        <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
            ABOUT
        </Typography>
        <Box sx={{ width:{sx:'100%', sm:'95%'}, height:'100%', 
            display:'flex', alignItems:'center', padding:{xs:'1em', sm:'2em', md:'0'}, 
            flexDirection:{xs:'column', sm:'column' ,md:'row'}, justifyContent:'space-around', gap:'1em'}}>
            <CardEvent title={eventCard[0].title} desc={eventCard[0].desc} img={eventCard[0].img} focus={true}/>
            <CardEvent title={eventCard[1].title} desc={eventCard[1].desc} img={eventCard[1].img} focus={true}/>
            <CardEvent title={eventCard[2].title} desc={eventCard[2].desc} img={eventCard[2].img} focus={true}/>
                
        </Box>
    </Box>
  )
}

export default About;