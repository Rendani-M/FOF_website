import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CardEvent({title, desc, img, focus, date}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ 
            width: focus ? "90%" : "80%", 
            height: focus ? '30em' : '25%',
            transition: 'all 0.5s ease' // Add transition for smooth resizing
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height= '40%'
                image={img? img: "https://i.pinimg.com/1200x/d8/d2/68/d8d268ab051da48fb177a8aa08f90410.jpg"}
            />
            <CardContent sx={{  mb:'0.5em', height: focus ? '44%' : '40%'  }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
            
            <CardActions>
                <Button onClick={handleOpen} size="small">Learn More</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    </Box>
                </Modal>
            </CardActions>
        </Card>
    )
}

export default CardEvent;
