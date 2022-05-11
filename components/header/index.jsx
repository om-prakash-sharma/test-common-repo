
import React from 'react';
import { header, menu } from "./style";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ title = 'Header' }) => {
    return <header style={header}>
        <label style={menu} htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="menu" component="span">
                <MenuIcon />
            </IconButton>
        </label>
        {title}
    </header>

}

export default Header;