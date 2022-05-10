import React from 'react';
import headerStyle from "./style";

const Header = ({ title = 'Header' }) => {
    return (
        <header style={headerStyle}>
            {title}
        </header>
    )
}

export default Header;