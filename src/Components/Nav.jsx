import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import logo from '../Assets/wfg-logo.webp'
import '../Css/Nav.css'

const Nav = () => {
    return (
        <nav>
            <figure className='nav__logo--wrapper'>
                <img src={logo} alt="" />
            </figure>
            <IconButton>
                <Menu/>
            </IconButton>
        </nav>
   );
}

export default Nav;
