import React, { useContext } from 'react';
import { Box, Typography, Paper, Grid, CardMedia, Button, Modal, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import PaymentForm2 from '../../components/payment/PaymentForm2';
import { OpenContext } from '../../Context/OpenContext';

const StyledPaper = styled(Paper)(({ theme }) => ({ 
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: '2em'
}));
  
const StyledCardMedia = styled(CardMedia)({
    height: '100%'
});

function ContributionCard({title, desc, img}) {
    // const [open, setOpen] = useState(false);
    const { open, setOpen, setDesc } = useContext(OpenContext);
    const handleOpen = () => {setOpen(true);setDesc(title);}
    const handleClose = () => {setOpen(false);setDesc("");}
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const style = {
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isXs ? '98vw' : isSm ? '85vw' : '70vw',
        minHeight: isXs ? '60%' : isSm ? '50%' : '40%', 
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        p: 1,
        bgcolor: '#ffffff',
        borderRadius:'0.3em'
    };
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
                            
                            <Box sx={style}>
                                <Typography variant="h5" gutterBottom sx={{ marginTop:'1em' }}>{title}</Typography>
                                <PaymentForm2 desc={title} handleClose={handleClose} />
                            </Box>
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