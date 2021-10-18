import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container mx-auto banner-container">
                <h2 className="text-7xl text-textBlue w-6/12 leading-tight">Caring For The Health And Well Being Of Family.</h2>
                <p className="text-lg font-medium text-textBlue w-6/12 my-8">The health and well-being of our patients and their health care team will
                always be our priority, so we follow the best practices for cleanliness.
                </p>
                <Link to="/services"><button className="py-4 px-8 bg-lightGreen rounded-full text-black font-semibold text-lg" >Our Serivces</button></Link>
            </div>
        </div>
    );
};

export default Banner;