import { Box, Typography } from '@mui/material';
import React from 'react'
import CardEvent from '../../card/cardevent/CardEvent';

function Services() {
    const eventCard = [
        {
            title:'MENS MINISTRY',
            desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
            img:"https://www.apostolic.edu/wp-content/uploads/2015/08/4.featuredimage.jpg"
        },
        {
            title:'SUNDAY SERVICE',
            desc:'John 3:16 [NKJV] For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png"
        },
        {
            title:'WOMENS MINISTRY',
            desc:"As a pastor, I am humbled and honored to walk beside you on your spiritual journey. Together, let us seek God's light in every moment, for it is in the darkest times that His love shines brightest. - [Apostle Alfred Makhavhu]",
            img:"https://www.apostolic.edu/wp-content/uploads/2014/02/womens_ministry-1.jpg"
        },
        {
            title:'YOUTH SERVICE',
            desc:"As a pastor, I am humbled and honored to walk beside you on your spiritual journey. Together, let us seek God's light in every moment, for it is in the darkest times that His love shines brightest. - [Apostle Alfred Makhavhu]",
            img:'https://i.ytimg.com/vi/bLsRyc6gxMw/hqdefault.jpg'
        },
        {
            title:'WEDNESDAY PRAYER',
            desc:'John 3:16 [NKJV] For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png"
        }
    ];
  
    return (
      <Box sx={{ 
                 width:'100%', 
                 height:'100%', 
                 display:'flex', 
                 alignItems:'center', 
                 justifyContent:'center',
                 padding:'4em 0em',
                 flexDirection:'column',
                 backgroundColor: '#ecececc0',
                 color: '#000',
                 paddingBottom:'13em'
            }}>
          <Typography variant='h3' sx={{ mb:'1em', color:'black' }}>
              Our Serivces
          </Typography>
          <Box component={Box} sx={{ width:'95%', height:'100%', 
              display:'flex', alignItems:'center',
              flexDirection:'row', justifyContent:'space-around', gap:'1em'}}>
              <CardEvent title={eventCard[0].title} desc={eventCard[0].desc} img={eventCard[0].img} focus={true}/>
              <CardEvent title={eventCard[1].title} desc={eventCard[1].desc} img={eventCard[1].img} focus={true}/>
              <CardEvent title={eventCard[2].title} desc={eventCard[2].desc} img={eventCard[2].img} focus={true}/>
              <CardEvent title={eventCard[3].title} desc={eventCard[3].desc} img={eventCard[3].img} focus={true}/>
          </Box>
      </Box>
    )
}

export default Services