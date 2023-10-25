import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, CardMedia, Button, Modal } from '@mui/material';
import { styled } from '@mui/system';
import StripeContainer from '../../components/payment/StripeContainer';
 
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '2em'
  }));
  
  const StyledCardMedia = styled(CardMedia)({
      height: '100%'
  });
  
  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60vw', 
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 0,
      height:'70%', 
      display: 'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: '#ecececc0'
  };

function ContributionCard({title, desc, img}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <StyledPaper>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box sx={{ display:'flex', flexDirection:'column' }}>
                    <Box>
                        <Typography variant="h5" gutterBottom>{title}</Typography>
                        <Typography variant="body1" sx={{ textAlign:'justify', padding:'1em' }}>
                            {desc}
                        </Typography>
                    </Box>
                    <Box>
                        <Button variant="contained" size='small' onClick={handleOpen} >contribute</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            
                            <Paper elevation={3} sx={style}>
                                <Typography variant="h5" gutterBottom sx={{ marginTop:'1em' }}>{title}</Typography>
                                <StripeContainer />
                            </Paper>
                        </Modal>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCardMedia
                    image={img}
                    title={title}
                />
            </Grid>
        </Grid>
    </StyledPaper>
  )
}

export default ContributionCard