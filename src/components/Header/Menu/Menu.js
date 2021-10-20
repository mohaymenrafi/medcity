import React from 'react';
import './Menu.css';
import logo from '../../../images/logo-dark.png';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Menu = () => {
    const {logOut, user}= useAuth(); 
    return (
        <div className="bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 py-4 items-center">
                <div>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="menu flex justify-end col-span-2 items-center">
                    <NavLink className="mr-4 text-lg font-semibold" to="/" >Home</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/about" >About</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/services" >Services</NavLink>
                    <NavLink className="mr-4 text-lg font-semibold" to="/contact" >Contact</NavLink>
                    {
                        user?.email || user?.displayName ? <h2 className="sand font-semibold">{user.displayName} <button onClick={logOut} className="bg-darkBlue p-2 text-white ml-4 rounded">LogOut </button></h2> : <NavLink className="mr-4 text-lg font-semibold" to="/login" >Login/Register</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;