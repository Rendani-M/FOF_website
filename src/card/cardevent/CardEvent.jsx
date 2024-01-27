import { Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Modal,  ThemeProvider, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'

const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          ::-webkit-scrollbar {
            width: 0px;
          }
        `,
      },
    },
});

function CardEvent({title, desc, img, focus, date, expandImg, scripture, scriptVerse}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card sx={{ 
            width: {sx: focus ? "100%" : "80%", sm: focus ? "90%" : "80%"}, 
            height: focus ? '37em' : '28%',
            transition: 'all 0.5s ease' // Add transition for smooth resizing
        }}>
            {!scripture && <CardMedia
                component="img"
                alt="green iguana"
                sx={{ height: { xs: '50%', sm: '50%' } }} // Adjust based on your needs
                image={img? img: "coming_soon.jpg"}
            />}

            <CardContent sx={{ mb:'0.2em', height: focus ? '42%' : '36%', overflowY: 'hidden' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {scripture && <Typography gutterBottom variant="h6" component="span" sx={{ mb:'2em' }}>
                    {scriptVerse}
                </Typography>}
                <Typography variant="body2" color="text.secondary" sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: (focus || scripture) ? 5 : 1, // Adjust based on your needs
                    WebkitBoxOrient: 'vertical'
                }}>
                    {(focus || scripture)? desc: ""}
                </Typography>
                {date ? (
                    <>
                        <hr style={{ marginTop:'1em' }}/>
                        <Typography variant="span" color="text.secondary">
                            Date: {dateConverter(date)}
                        </Typography>
                        <hr style={{ marginBottom:'0.5em' }}/>
                    </>
                    ) : null
                }
            </CardContent>

            
            <CardActions sx={{ height: '8%' }}>
                <Button onClick={handleOpen} size="small">Learn More</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ overflowY:'auto' }}
                >
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box sx={{ overflowY:'auto',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '70vw', 
                                    bgcolor: 'background.paper',
                                    boxShadow: 24,
                                    p: 0,
                                    maxHeight:'70vh', 
                                    display: 'flex',
                                    justifyContent:'space-between' }}>
                            
                            <Box sx={{ display:'flex', flexDirection:{xs:'column-reverse', sm:'column-reverse', md:'row'}, height:'auto' }}>
                                <Box sx={{ padding:'1em 2em', width:{sm:'100%', md:'55%'}, overflow:'visible', maxHeight:{xs: expandImg?'40%':'70%',sm:expandImg?'10%':'70%',md:'100%'} }}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        overflow: 'hidden', textAlign:'justify'
                                    }}>
                                        {desc}
                                    </Typography>
                                </Box>
                                <Box sx={{ height: 'auto', width:{sm:'100%', md:'45%'}, overflow:'hidden' }}>
                                    <img src={img? img: "coming_soon.jpg"} alt="" style={{ width: '100%', height: '100%', objectFit:'contains' }} />
                                </Box>
                            </Box>
                        </Box>
                    </ThemeProvider>
                </Modal>
            </CardActions>
        </Card>
    )
}

export default CardEvent;