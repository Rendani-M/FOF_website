import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardEvent from '../../card/cardevent/CardEvent';
import { AnimatePresence, motion } from 'framer-motion'; // Import these
// import './event.css';

function Event() {
    const eventCard = [
        {
            title:'WOMENS MINISTRY',
            desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
            img:"https://www.apostolic.edu/wp-content/uploads/2014/02/womens_ministry-1.jpg",
            date:"19/08/2023"
        },
        {
            title:'MENS MINISTRY',
            desc:"At Flames Of Fire, we are on a mission to bring God's love and light to the world. With open hearts, open minds, and open doors, we invite you to join us in this transformative journey of faith, hope, and love. Together, we can make a difference and fulfill our calling to be the hands and feet of Jesus Christ in our world today.",
            img:"https://www.apostolic.edu/wp-content/uploads/2015/08/4.featuredimage.jpg",
            date:"27/08/2023"
        },
        {
            title:'POWER SERVICE',
            desc:'John 3:16 [NKJV] For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png",
            date:"15/08/2023"
        },
        {
            title:'THANKSGIVING CONFERENCE',
            desc:'John 3:16 [NKJV] For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.',
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png",
            date:"07/12/2023"
        }
    ];
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box sx={{  width:'100%', height:'100%',
                   display:'flex', alignItems:'center', padding:'5em 0',paddingBottom:'13em',
                   flexDirection:'column', justifyContent:'center', backgroundColor: '#ecececc0'}}>
            <Typography variant='h3' sx={{ mb:'1em', color:'black' }}>
                Events
            </Typography>
    
            <Box sx={{ width:'100%', height:'100%', 
                display:'flex', alignItems:'center',
                flexDirection:'row', justifyContent:'center', gap:'1em'}}>
                
                <AnimatePresence>
                    {page > 1 && 
                        <Box sx={{ width: "30%" }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page-2].title} desc={eventCard[page-2].desc} img={eventCard[page-2].img} focus={false} date={eventCard[page-2].date}/>
                            </motion.div>
                        </Box>
                    }
                    <Box sx={{ width: "40%" }}>
                        <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardEvent title={eventCard[page-1].title} desc={eventCard[page-1].desc} img={eventCard[page-1].img} focus={true} date={eventCard[page-1].date}/>
                        </motion.div>
                    </Box>
                    {page < eventCard.length && 
                        <Box sx={{ width: "30%" }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page].title} desc={eventCard[page].desc} img={eventCard[page].img} focus={false} date={eventCard[page].date}/>
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