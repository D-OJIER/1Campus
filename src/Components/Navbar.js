import React, { useState } from 'react'
import Logo from "../Assets/LogoE2.svg"
import { HiOutlineBars3 } from "react-icons/hi2"

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {

  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Reviews",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Admin Login",
      icon: <AccountCircleOutlinedIcon />,
    }
  ];
  
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=''/>
        </div>
        <div className='navbar-links-container'>
            <button className='primary-button1'>Home</button>
            <button className='primary-button'>About</button>
            <button className='primary-button' >Calendar</button>
            <button className='primary-button'>Contact</button>
            <button className='primary-button'>Admin Login</button>
            <button className='primary-button2'>Events</button>
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor='right'>
            <Box
              sx={{ width:250}}
              role = 'presentation'
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar
