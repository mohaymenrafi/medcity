import React from 'react';
import './Header.css';
import TopBar from './TopBar/TopBar';
import Navmenu from './Navmenu/Navmenu';


const Header = () => {
    
    return (
        <div>
            <TopBar></TopBar>
            <Navmenu></Navmenu>
        </div>
    );
};

export default Header;