import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
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

function Contributions() {
    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState("");
    const [eventCard, setEventCard] = useState([]);

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
            </Box>
        </OpenContext.Provider>
    );
}

export default Contributions;