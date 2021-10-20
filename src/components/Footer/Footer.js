import React from 'react';
import './Footer.css';
import logoLight from '../../images/logo-light.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="bg-darkBlue py-16 footer p-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="sm:py-8">
                        <img src={logoLight} alt="" />
                        <p className="text-white text-md mt-8 w-8/12">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                        <div className="sm:py-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Departments</h3>
                            <Link className="block mb-2 text-white text-md" to="/service/1">Neurology Clinic</Link>
                            <Link className="block mb-2 text-white text-md" to="/service/2">Cardiology Clinic</Link>
                            <Link className="block mb-2 text-white text-md" to="/service/3">Pathology Clinic</Link>
                            <Link className="block mb-2 text-white text-md" to="/service/4">Laboratory Analysis</Link>
                            <Link className="block mb-2 text-white text-md" to="/service/5">Pediatric Clinic</Link>
                            <Link className="block mb-2 text-white text-md" to="/service/6">Cardiac Clinic</Link>
                        </div>
                        <div className="sm:py-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Links</h3>
                            <Link className="block mb-2 text-white text-md" to="/">Home</Link>
                            <Link className="block mb-2 text-white text-md" to="/about">About Us</Link>
                            <Link className="block mb-2 text-white text-md" to="/services">Services</Link>
                            <Link className="block mb-2 text-white text-md" to="/contact">Contact</Link>
                            <Link className="block mb-2 text-white text-md" to="/login">Login/Registration</Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg px-12 py-8">
                            <h3 className="text-2xl font-semibold text-darkBlue mb-4">Quick Contact</h3>
                            <p>If you have any questions or need help, feel free to contact with our team.</p>
                            <p className="my-8"> <FontAwesomeIcon icon={faPhoneAlt} color="darkBlue" size="2x"/> <span className="text-4xl font-semibold text-darkBlue"> 123 456 789</span> </p>
                            <p>2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 text-center">
                <div>&copy; 2021 Medcity, All Rights Reserved.</div>
            </div>
        </div>
    );
};

export default Footer;