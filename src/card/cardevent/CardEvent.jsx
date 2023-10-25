import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw', 
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
    height:'60vh', 
    display: 'flex',
    justifyContent:'space-between',
    overflow: 'auto' // Add this line
};


function CardEvent({title, desc, img, focus, date}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ 
            width: focus ? "90%" : "80%", 
            height: focus ? '33em' : '25%',
            transition: 'all 0.5s ease' // Add transition for smooth resizing
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                sx={{ height: { xs: '50%', sm: '50%' } }} // Adjust based on your needs
                image={img? img: "https://i.pinimg.com/1200x/d8/d2/68/d8d268ab051da48fb177a8aa08f90410.jpg"}
            />

            <CardContent sx={{ mb:'0.5em', height: focus ? '32%' : '36%', overflowY: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: focus ? 7 : 1, // Adjust based on your needs
                    WebkitBoxOrient: 'vertical'
                }}>
                    {focus? desc: ""}
                </Typography>
                {date ? (
                    <>
                        <hr style={{ marginTop:'1em' }}/>
                        <Typography variant="span" color="text.secondary">
                            Date: {date}
                        </Typography>
                        <hr />
                    </>
                    ) : null
                }
            </CardContent>

            
            <CardActions sx={{ height: '10%' }}>
                <Button onClick={handleOpen} size="small">Learn More</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Paper elevation={3} sx={style}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ padding:'3em' }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        overflow: 'hidden', textAlign:'justify'
                                    }}>
                                        {desc}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ height: '100%' }}>
                                    <img src={img? img: "https://i.pinimg.com/1200x/d8/d2/68/d8d268ab051da48fb177a8aa08f90410.jpg"} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Modal>
            </CardActions>
        </Card>
    )
}

export default CardEvent;
