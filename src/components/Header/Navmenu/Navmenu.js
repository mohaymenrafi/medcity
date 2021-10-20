import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo-dark.png';
import './Navmenu.css';

const Navmenu = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const {logOut, user}= useAuth(); 
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-6 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/"><img src={logo} alt="" /></Link>
            <button
              className="text-darkBLue cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center text-darkBlue">
              <li className="nav-item">
                <NavLink className="mr-4 text-lg font-semibold" to="/" >Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="mr-4 text-lg font-semibold" to="/about" >About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mr-4 text-lg font-semibold" to="/services" >Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mr-4 text-lg font-semibold" to="/contact" >Contact</NavLink>
              </li>
              {user?.email || user?.displayName ? <h2 className="sand font-semibold">{user.displayName} <button onClick={logOut} className="bg-darkBlue p-2 text-white ml-4 rounded">LogOut </button></h2> : <li className="nav-item">
                <NavLink className="text-lg font-semibold" to="/login" >Login/Register</NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navmenu;