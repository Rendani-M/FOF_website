import React, { useEffect, useState } from 'react';
import { Box, Button, CssBaseline, Modal, ThemeProvider, Typography, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Topbar from '../../components/topbar/Topbar';
import ContributionCard from '../../card/cardContribution/ContributionCard';
import { OpenContext } from '../../Context/OpenContext';
import { ref as databaseRef, onValue } from "firebase/database";
import { db } from '../../firebase';

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

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

function Contributions() {
    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");
    const [eventCard, setEventCard] = useState([]);

    const [openDeclaimer, setOpenDeclaimer] = useState(false);
    const handleOpen = () => setOpenDeclaimer(true);
    const handleClose = () => setOpenDeclaimer(false);

    useEffect(() => {
        firebaseGetAll();
    }, []);

    function firebaseGetAll() {
        const usersRef = databaseRef(db, 'admin/Payment/cards');
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
        <OpenContext.Provider value={{ open, setOpen, desc, setDesc }}>
            <Box sx={{ width:'100%', height:'auto', backgroundColor: '#ecececc0'}}>
                <Topbar contributions={true}/>
                <StyledBox>
                    {eventCard.map((item, index) => (
                        <ContributionCard key={index} title={item.title} desc={item.desc} img={item.img}/>
                    ))}
                </StyledBox>
                <Box sx={{ 
                display:'flex', 
                alignItems:{ xs: 'center', md:'start' },
                justifyContent:{ xs: 'center', md: 'space-around' },
                gap:'2em',
                padding:'2em',
                flexDirection: { xs: 'column', md: 'row' }, 
                backgroundImage: 'linear-gradient(to right, #11cb87 0%, #2575fc 100%)',
                color: '#fff',
                fontFamily: 'Arial, sans-serif'
                }}>
                    <Button onClick={handleOpen} size="small" sx={{ color:'white', border:'1px solid white' }}>Disclaimer</Button>
                    <Modal
                        open={openDeclaimer}
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
                                    <Box sx={{ padding:'2em 2em', width:'100%', overflow:'visible', maxHeight:{xs:'70%',sm:'70%',md:'100%'} }}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            DISCLAIMER
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{
                                            overflow: 'hidden', textAlign:'justify'
                                        }}>
                                            Flames of Fire Ministries is committed to transparency and integrity in all our financial transactions. We appreciate your support and contributions to our church offerings and fundraising efforts. Please take note of the following:

                                            1. Purpose of the Payment Gateway:
                                            Our payment gateway allows you to make secure online contributions to our church.
                                            It facilitates various payment methods, including credit/debit cards, UPI, and payment wallets, powered by Payfast.
                                            
                                            2. Security and Data Protection:
                                            Your personal and financial information is treated with utmost care.
                                            Mandatory data fields are collected solely for financial compliance purposes and will not be used for any other reason.
                                            
                                            3. Offline Contributions:
                                            If you prefer, you can still contribute offline by delivering cheques made out to Flames of Fire Ministries to our church office.
                                            Please mention the purpose of your donation on the back of the cheque along with your PAN card number (required).
                                            
                                            4. Risk Acknowledgment:
                                            By using our payment gateway, you acknowledge that all transactions involve inherent risks.
                                            You understand that electronic transactions may encounter technical glitches, delays, or other unforeseen issues.
                                            Flames of Fire Ministries shall not be liable for any damages arising from such risks.
                                            
                                            5. No Refunds Policy:
                                            Contributions made through the payment gateway are considered final.
                                            Refunds will only be considered under exceptional circumstances, subject to discussion with the church.
                                            The church reserves the right to assess and determine the validity of refund requests.
                                            
                                            6. Dispute Resolution:
                                            Any disputes related to payments should be brought to the attention of Flames of Fire Ministries promptly.
                                            The church will handle disputes in a fair and transparent manner, considering all relevant factors.
                                            
                                            7. Email Communication:
                                            For any payment-related queries, please contact us at: info@flamesoffireministries.co.za.
                                            We appreciate your cooperation and understanding.
                                            
                                            8. Gratitude:
                                            We extend our heartfelt gratitude for your generosity, which supports our various ministries, church activities, and the maintenance of our premises.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </ThemeProvider>
                    </Modal>
                </Box>
            </Box>
        </OpenContext.Provider>
    );
}

export default Contributions;