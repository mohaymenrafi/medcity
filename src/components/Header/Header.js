import React from 'react';
import './Header.css';
import Menu from './Menu/Menu';
import TopBar from './TopBar/TopBar';


const Header = () => {
    
    return (
        <div>
            <TopBar></TopBar>
            <Menu></Menu>
        </div>
    );
};

export default Header;