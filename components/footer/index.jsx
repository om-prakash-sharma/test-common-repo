import React from 'react';
import footerStyle from "./style";

const Header = ({ title = "Footer" }) => {
    return (
        <footer style={footerStyle}>
            {title} @ {new Date().getFullYear()}
        </footer>
    )
}

export default Header;