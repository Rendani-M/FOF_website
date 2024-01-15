import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent,  IconButton,  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ref as databaseRef, onValue } from "firebase/database";
import { db } from '../../firebase';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function CardVideo() {
    const [expanded, setExpanded] = useState(false);
    const [videoCard, setVideoCard] = useState({});

    useEffect(() => {
        firebaseGetAll();
    }, []);

    function firebaseGetAll() {
        const usersRef = databaseRef(db, 'admin/Videos');
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            setVideoCard(data);
        });
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg:'row' }, width: {xs:'90%',sm:'80%'}, paddingBottom: '1em' }}>
            <Box sx={{ width: { xs: '100%',  sm: '100%', md: '100%', lg: '60%' }, height: { xs: '180px', sm:'400px', md: '400px', lg: 'auto'  }, overflow: 'hidden' }}>
                <iframe width="100%" height="100%" src={videoCard?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                </iframe>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom :'1em', width: { xs: '100%',  sm: '100%', md: '100%', lg: '40%' } }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {videoCard?.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Apostle Alfred Makhavhu
                    </Typography>
                </CardContent>
                <Box sx={{ display:'flex', justifyContent:'center' }}>
                    <Typography sx={{ width:'70%', textAlign:'justify', display:{ xs: expanded ? 'block' : 'none', sm: expanded ? 'block' : 'none', md: expanded ? 'block' : 'none', lg: 'block' } }}>
                        {videoCard?.desc}
                    </Typography>
                </Box>
                <CardActions disableSpacing sx={{ display:{ xs: 'block', sm:'block', md:'block', lg: 'none' }}}>
                    <ExpandMore
                        expand={expanded} // pass the expanded state as a prop
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Box>
        </Card>
    );
    
};

export default CardVideo;