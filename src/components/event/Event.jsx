import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardEvent from '../../card/cardevent/CardEvent';
import { AnimatePresence, motion } from 'framer-motion'; // Import these
// import './event.css';

function Event() {
    const eventCard = [
        {
            title:'POWER SERVICE',
            desc:"Join us for a transformative and empowering experience at our upcoming Power Service, an extraordinary gathering where the presence of God is magnified through fervent prayer and an immersive exploration of His Word. This unique service goes beyond the traditional Sunday worship, offering a dedicated space for individuals to seek spiritual rejuvenation and divine intervention. At Power Service, we prioritize prayer, creating an atmosphere where participants can bring their needs, burdens, and aspirations before the Almighty. This isn't just another church service; it's an opportunity to encounter the supernatural and embrace the extraordinary power of God in your life.",
            img:"Service.jpeg",
            date:"19 November 2023",
            expandImg: false
        },
        {
            title:'WOMENS MINISTRY',
            desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
            img:"https://www.apostolic.edu/wp-content/uploads/2014/02/womens_ministry-1.jpg",
            date:"25 November 2023",
            expandImg: false
        },
        {
            title:'MENS MINISTRY',
            desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
            img:"https://www.apostolic.edu/wp-content/uploads/2015/08/4.featuredimage.jpg",
            date:"26 November 2023",
            expandImg: false
        },
        {
            title:'THANKSGIVING CONFERENCE',
            desc:"Join us for our annual Thanksgiving Conference—a unique gathering at the year's end to express gratitude for God's faithfulness.This exclusive event is a time of worship, praise, and reflection on the year's blessings. Our diverse and amazing speakers will deliver awe-inspiring messages rooted in the Word of God. Don't miss this opportunity to come together as a church family, celebrate victories, and leave with a renewed sense of awe and appreciation.",
            img:"thanks.jpeg",
            date:"01 - 03 December 2023",
            expandImg: true
        }
    ];
    const [page, setPage] = useState(2);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box sx={{  width:'100%', height:'100%',
                   display:'flex', alignItems:'center', padding:'5em 1em',paddingBottom:'13em',
                   flexDirection:'column', justifyContent:'center', backgroundColor: '#ecececc0'}}>
            <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
                Events
            </Typography>
    
            <Box sx={{ width:'100%', height:'100%', 
                display:'flex', alignItems:'center',
                flexDirection:'row', justifyContent:'center', gap:'1em'}}>
                
                <AnimatePresence>
                    {page > 1 && 
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'}  }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page-2].title} desc={eventCard[page-2].desc} img={eventCard[page-2].img} focus={false} date={eventCard[page-2].date} expandImg={eventCard[page-2].expandImg}/>
                            </motion.div>
                        </Box>
                    }
                    <Box sx={{ width: {xs:'100%', sm:'40%'}}}>
                        <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardEvent title={eventCard[page-1].title} desc={eventCard[page-1].desc} img={eventCard[page-1].img} focus={true} date={eventCard[page-1].date} expandImg={eventCard[page-1].expandImg}/>
                        </motion.div>
                    </Box>
                    {page < eventCard.length && 
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'}  }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page].title} desc={eventCard[page].desc} img={eventCard[page].img} focus={false} date={eventCard[page].date} expandImg={eventCard[page].expandImg}/>
                            </motion.div>
                        </Box>
                    }
                </AnimatePresence>
                
            </Box>
            <Stack spacing={2} sx={{ color:'black', mt: '1em'}}>
                <Typography>Page: {page}</Typography>
                <Pagination color="primary" count={eventCard.length} page={page} onChange={handleChange}/>
            </Stack>
                    
        </Box>
    )
}


export default Event;