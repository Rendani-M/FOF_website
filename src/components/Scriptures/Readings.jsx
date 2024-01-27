import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardEvent from '../../card/cardevent/CardEvent';
import { AnimatePresence, motion } from 'framer-motion'; // Import these
import { ref as databaseRef, onValue } from "firebase/database";
import { db } from '../../firebase';


export default function Readings() {
    const [page, setPage] = useState(2);
    const [eventCard, setEventCard] = useState([]);
    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        firebaseGetAll();
    }, []);

    function firebaseGetAll() {
        const usersRef = databaseRef(db, 'admin/Scripture');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            const dataArray = [];
            for(let id in data){
                dataArray.push(data[id]);
            }
            dataArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            setEventCard(dataArray);
        });
    }

    return (
        <Box sx={{  width:'100%', height:'100%',
                   display:'flex', alignItems:'center', padding:'5em 1em',paddingBottom:'13em',
                   flexDirection:'column', justifyContent:'center', backgroundColor: '#ecececc0'}}>
            <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
                Weekly Scriptures
            </Typography>
    
            <Box sx={{ width:'100%', height:'100%', 
                display:'flex', alignItems:'center',
                flexDirection:'row', justifyContent:'center', gap:'1em'}}>
                
                <AnimatePresence>
                    {page > 1 && eventCard[page-2] &&
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'}  }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page-2].title} desc={eventCard[page-2].desc} img={eventCard[page-2].img} focus={false} date={eventCard[page-2].day} expandImg={false} scripture={true} scriptVerse={eventCard[page-2].scripture}/>
                            </motion.div>
                        </Box>
                    }
                    {eventCard[page-1] &&
                        <Box sx={{ width: {xs:'100%', sm:'40%'}}}>
                            <motion.div key={page-1} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page-1].title} desc={eventCard[page-1].desc} img={eventCard[page-1].img} focus={true} date={eventCard[page-1].day} expandImg={false} scripture={true} scriptVerse={eventCard[page-2].scripture}/>
                            </motion.div>
                        </Box>
                    }
                    {page < eventCard.length && eventCard[page] &&
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'}  }}>
                            <motion.div key={page} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page].title} desc={eventCard[page].desc} img={eventCard[page].img} focus={false} date={eventCard[page].day} expandImg={false} scripture={true} scriptVerse={eventCard[page-2].scripture}/>
                            </motion.div>
                        </Box>
                    }
                </AnimatePresence>

                
            </Box>
            <Stack spacing={2} sx={{ color:'black', mt: '1em'}}>
                <Typography>Page: {eventCard?.length > 1?page:1}</Typography>
                <Pagination color="primary" count={eventCard?.length} page={eventCard?.length > 1?page:1} onChange={handleChange}/>
            </Stack>
                    
        </Box>
    )
}
