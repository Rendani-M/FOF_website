import styled from '@emotion/styled';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardActions, CardContent,  IconButton,  Typography } from '@mui/material'
import React from 'react'

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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg:'row' }, width: '80%', paddingBottom: '1em' }}>
            <Box sx={{ width: { xs: '100%',  sm: '100%', md: '100%', lg: '60%' }, height: { xs: '180px', sm:'400px', md: '400px', lg: 'auto'  }, overflow: 'hidden' }}>
                <iframe width="100%" height="100%" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fkeflamesoffire%2Fvideos%2F248855884183390%2F&show_text=true" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                </iframe>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', paddingBottom :'1em', width: { xs: '100%',  sm: '100%', md: '100%', lg: '40%' } }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        HOW TO PROSPER THROUGH GOD
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Apostle Alfred Makhavhu
                    </Typography>
                </CardContent>
                <Box sx={{ display:'flex', justifyContent:'center' }}>
                    <Typography sx={{ width:'70%', textAlign:'justify', display:{ xs: expanded ? 'block' : 'none', sm: expanded ? 'block' : 'none', md: expanded ? 'block' : 'none', lg: 'block' } }}>
                        Gather in the digital sanctuary every week for a soul-enriching experience with our online teachings. 
                        Apostle Alfred Makhavhu shares in the wisdom of timeless teachings from the word of God.  
                        Our weekly online teaching sessions are not just about words; they're about connection, reflection, 
                        and the shared pursuit of a deeper understanding of our faith in the Lord Jesus Christ. 
                        Join us as we navigate in the digital age, fostering a sense of fellowship and ministry that transcends screens. 
                        May these online teachings be a source of inspiration, solace, and spiritual growth as we navigate 
                        the path of devotion together.
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