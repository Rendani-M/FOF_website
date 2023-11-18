import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import Intro from '../../components/intro/Intro'
import About from '../../components/about/About'
import Event from '../../components/event/Event'
import Video from '../../components/feature/video/Video'
import Contact from '../../components/contactfooter/Contact'
import Services from '../../components/services/Services'
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Book from '../../components/Sales/Book'

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

function Home() {
  const [currentSection, setCurrentSection] = useState('');

  const boxRef = useRef();
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.id === ""?
          setCurrentSection('intro'):
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.7 });

    const boxChildren = boxRef.current.children;
    const currentSectionRefs = sectionRefs.current; // Copy sectionRefs.current to a variable
    for (let i = 0; i < boxChildren.length; i++) {
      currentSectionRefs[boxChildren[i].id] = boxChildren[i];
      observer.observe(boxChildren[i]);
    }

    return () => {
      for (let id in currentSectionRefs) { // Use the copied variable here
        observer.unobserve(currentSectionRefs[id]);
      }
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box ref={boxRef} sx={{ width:'100%', height:'100%'}}>
        <div ><Topbar sections={currentSection}/></div>
        <div id="intro"><Intro/></div>
        <div id="about"><About/></div>
        <div id="services"><Services/></div>
        <div id="book"><Book/></div>
        <div id="video"><Video/></div>
        <div id="event"><Event/></div>
        <div id="contact"><Contact/></div>
      </Box>
    </ThemeProvider>
  )
}

export default Home;
