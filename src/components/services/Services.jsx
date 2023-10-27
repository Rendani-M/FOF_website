import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardEvent from '../../card/cardevent/CardEvent';
import { AnimatePresence, motion } from 'framer-motion';

function Services() {
    const eventCard = [
        {
            title:'MENS MINISTRY',
            desc:"Men’s Ministry is a dedicated branch of our church that focuses on the spiritual growth and fellowship of men. Our mission is to empower men to lead, influence, and grow in their faith. We provide a supportive environment where men can discuss and explore their faith, engage in meaningful conversations, and build strong relationships with other members of the church. We organize regular bible studies, workshops, retreats, and service projects that allow men to connect with each other and serve the community.",
            img:"https://www.apostolic.edu/wp-content/uploads/2015/08/4.featuredimage.jpg"
        },
        {
            title:'SUNDAY SERVICE',
            desc:"Sunday Service is the heart of our church's weekly activities, a time when our community comes together to worship, learn, and grow in faith. We gather every Sunday to celebrate God's love through prayer, song, and the reading of Scripture. Our service is a blend of traditional and contemporary worship styles, designed to be accessible and meaningful for all attendees. The sermon, delivered by our pastor, provides insightful teachings on the Bible and practical applications for daily living. We also offer Sunday School for children and youth during the service. Whether you're a long-time believer or new to the faith, we invite you to join us in fellowship and worship at our Sunday Service.",
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png"
        },
        {
            title:'WOMENS MINISTRY',
            desc:"Women's Ministry is a vibrant part of our church that aims to nurture the spiritual development and fellowship of women. Our goal is to inspire women to grow in their faith, build strong relationships within the church community, and make a positive impact in their families and society. We offer a variety of activities including bible studies, prayer meetings, workshops, retreats, and service opportunities that cater to the unique needs and interests of women. Our ministry provides a safe and welcoming space for women to share their experiences, support each other, and deepen their understanding of God's word. Whether you are new to the faith or seeking to strengthen your spiritual journey, Women's Ministry is here to walk with you.",
            img:"https://www.apostolic.edu/wp-content/uploads/2014/02/womens_ministry-1.jpg"
        },
        {
            title:'YOUTH SERVICE',
            desc:"Youth Service is an integral part of our church, specifically tailored to engage and inspire our younger members. We believe in the potential of our youth to be strong leaders and active participants in their faith. Our Youth Service provides a dynamic and welcoming environment where teenagers can explore their faith, ask questions, and connect with their peers. The service includes contemporary worship music, interactive activities, and relevant teachings that address the issues and challenges young people face. We also offer opportunities for our youth to serve in various church ministries and community outreach programs. Whether you're just starting your spiritual journey or looking to deepen your faith, our Youth Service is a place where you can belong, grow, and make a difference.",
            img:'https://i.ytimg.com/vi/bLsRyc6gxMw/hqdefault.jpg'
        },
        {
            title:'WEDNESDAY PRAYER',
            desc:"Wednesday Prayer is a special time in our church where we come together mid-week to seek God's guidance and express our gratitude. This service is dedicated to collective prayer, providing a peaceful space for members to connect with God and each other. We believe in the power of prayer to bring comfort, healing, and transformation. During this service, we pray for personal needs, our church, our community, and global issues. The service also includes a short reflection on a Bible passage to inspire and encourage us in our faith journey. Whether you need prayer or want to pray for others, our Wednesday Prayer service is a place of support and spiritual renewal.",
            img:"https://www.christiantruthcenter.com/wp-content/uploads/2021/08/Sunday-Service.png"
        }
    ];

    const [page, setPage] = useState(2);
    const handleChange = (event, value) => {
        setPage(value);
    };
  
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
          <Typography variant='h3' sx={{ mb:'1em', color:'black', display:'flex', justifyContent:'center' }}>
              Our Serivces
          </Typography>
          <Box sx={{ width:'100%', height:'100%', 
                display:'flex', alignItems:'center',
                flexDirection:'row', justifyContent:'center', gap:'1em'}}>
                
                <AnimatePresence>
                    {page > 1 && 
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'} }}>
                            <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                        style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                                <CardEvent title={eventCard[page-2].title} desc={eventCard[page-2].desc} img={eventCard[page-2].img} focus={false} date={eventCard[page-2].date}/>
                            </motion.div>
                        </Box>
                    }
                    <Box sx={{ width: {xs:'90%', sm:'40%'} }}>
                        <motion.div key={page-2} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardEvent title={eventCard[page-1].title} desc={eventCard[page-1].desc} img={eventCard[page-1].img} focus={true} date={eventCard[page-1].date}/>
                        </motion.div>
                    </Box>
                    {page < eventCard.length && 
                        <Box sx={{ width: "30%", display:{xs:'none', sm:'block'} }}>
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

export default Services