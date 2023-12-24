import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Home, Logout, People, PersonOutline } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    title:"Home",
    link:'/'
  }
  , 
  {
    title:"Contribute",
    link:'/contributions'
  }
];
const MotionBox = motion(Box);
const MemoizedMotionBox = React.memo(MotionBox, (prevProps, nextProps) => {
    // Only re-render if backGColor changes
    return prevProps.sx.background === nextProps.sx.background;
  });

function Topbar({ sections }) {
  const navigate = useNavigate();
  const [backGColor, setBackGColor] = useState('none');
  const [isIntroOrAbout, setIsIntroOrAbout] = useState("");
  const [state, setState] = useState({
    left: false
  });

    useEffect(() => {
      console.log("Current section:", sections);
      if (sections === 'about' || sections === 'intro') {
        setIsIntroOrAbout(sections);
      } 
    }, [sections]);

    useEffect(() => {
      isIntroOrAbout === 'intro'? setBackGColor('black'):setBackGColor('black');
      
    }, [isIntroOrAbout]);

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
    
      setState({[anchor]: open });
    };
    
    const list = (anchor) => (
      <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            <ListItemButton >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary={'People'} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary={'LogOut'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
    
    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" sx={{ background:'none' }}>
          <MemoizedMotionBox sx={{ position: 'absolute', width: '100%', height: '100%', background: backGColor }} initial={{ opacity: 0 }} animate={{ opacity: 1, background: backGColor }} exit={{ opacity: 1 }} transition={{ duration: 1 }} />
            <Toolbar>
              <Box sx={{ display:{xs:'block', sm:'none'} }}>
                <Drawer
                  anchor='left'
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                  sx={{
                      width: '240',
                      flexShrink: 0,
                      [`& .MuiDrawer-paper`]: { width: '240', boxSizing: 'border-box' },
                  }}
                  >
                      
                  <Box sx={{ overflow: 'auto' }}> 
                      {list('left')}
                  </Box>
                </Drawer>
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md:'block' } }}
              >
                FLAMES OF FIRE MINISTRIES
              </Typography>
              {/* when contribution works make justifyContent:'space-between'*/}
              <Box sx={{ display: 'flex', justifyContent:'end', width:{xs:'100%', sm:'100%', md:'17.5%'} }}>
                {navItems.map((item) => (
                  <Button key={item.title} sx={{ color: '#fff' }} onClick={()=>navigate(item.link)}>
                    {item.title}
                  </Button>
                ))}
              </Box> 
            </Toolbar>
        </AppBar> 
      </Box>
    );
  }

export default Topbar;
