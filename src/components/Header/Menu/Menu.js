import React from 'react';
import './Menu.css';
import logo from '../../../images/logo-dark.png';
import { Link, NavLink } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-4 items-center">
                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="menu flex justify-end">
                    <NavLink className="mr-4 text-lg font-semibold" to="/" >Home</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/about" >About</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/services" >Services</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/blog" >Blog</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/contact" >Contact</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/login" >Login/Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;