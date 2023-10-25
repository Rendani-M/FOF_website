import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Topbar from '../../components/topbar/Topbar';
import ContributionCard from '../../card/cardContribution/ContributionCard';

const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

function Contributions() {

    const Offering_Project_Title="Offering";
    const Offering_Project_Image="https://assets-global.website-files.com/5f6b9a421d5a61e1d0cd9e3d/5f8f636b9205d7182ebf0885_5af5c0d30c20bd4b5e1f43af_offeringplate.jpeg";
    const Offering_Project_Desc=`
        In the context of a church, an offering represents more than just a financial contribution. It's a tangible expression of faith, gratitude, and commitment to the community and its shared values.
        Offerings are an integral part of religious services, providing congregants with an opportunity to give back and support the church's mission. They help fund the church's operations, from maintaining the building to supporting outreach programs and charitable work.
        But offerings aren't solely about monetary donations. They can also take the form of time and talent. Many congregants offer their skills and expertise to serve the church in various capacities, from volunteering for events to participating in ministry work.
        The act of giving is deeply personal and can be profoundly spiritual. It's a way for individuals to reflect on their blessings, acknowledge God's role in their lives, and make a conscious decision to contribute to something bigger than themselves.
        Encouraging offerings isn't just about meeting budgetary needs; it's about fostering a spirit of generosity and stewardship within the community. It's about reminding individuals that they are an integral part of the church family, each with something unique to offer.
        As we move forward with our building project, we invite every member of our community to consider what they can offer. Whether it's a financial contribution, volunteering your time, or sharing your skills, every offering brings us one step closer to realizing our shared vision.`;

    const Building_Project_Title="Building Project";
    const Building_Project_Image="https://media.istockphoto.com/id/494351829/photo/mormon-church.jpg?s=612x612&w=0&k=20&c=y_GOACSm158YDeBkM3G8nkQgSn2oRve1onNApgqhryo=";
    const Building_Project_Desc=`
        Building a church is more than just a construction project. It's a labor of love, a testament of faith, and a symbol of a community's unity and commitment. This article explores the journey of building a church, from the initial planning stages to the final completion.The journey begins with a vision. 
        The church leaders and congregation come together to discuss their needs and aspirations for their new place of worship. This vision forms the foundation of the project, guiding every decision from the design to the materials used. Once the vision is clear, architects and engineers are brought on board to 
        translate this vision into a tangible design. They consider factors such as the size of the congregation, the church's liturgical practices, and the local climate and geography. The design must not only be functional but also reflect the spiritual values of the church community. Building a church is a significant 
        financial undertaking. Fundraising efforts may include donations from congregation members, grants from religious organizations, and community fundraising events. Every contribution, no matter how small, brings the community one step closer to realizing their vision. With funds in place, construction begins. This phase 
        can take several months to years, depending on the complexity of the design. Throughout this process, regular updates are provided to keep the community informed and involved. Once construction is complete, the church is not yet ready for worship. It must first be consecrated, a religious ceremony that dedicates the 
        building to divine worship. This momentous event marks the end of the construction journey and the beginning of the church's life as a place of worship. Building a church is a profound experience that strengthens community bonds and deepens individual faith. It's a testament to what can be achieved when a community 
        comes together with a shared vision. As congregants step into their new place of worship for the first time, they can take pride in knowing that they've contributed to creating this sacred space where their community will gather for generations to come.`

    return (
        <Box sx={{ width:'100%', height:'auto', marginTop:'3em', backgroundColor: '#ecececc0'}}>
            <Topbar sections="about" />
            <StyledBox>
                <ContributionCard title={Building_Project_Title} desc={Building_Project_Desc} img={Building_Project_Image}/>
                <ContributionCard title={Offering_Project_Title} desc={Offering_Project_Desc} img={Offering_Project_Image}/>
            </StyledBox>
        </Box>
    );
}

export default Contributions;
