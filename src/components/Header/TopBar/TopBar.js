import React from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from 'react-social-icons';

const TopBar = () => {
    const iconSize = {
        height:25,
        width:25,
        marginRight:'10px',
    }
    return (
        <div>
            <div className="topbar bg-darkBlue">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-2 items-center">
                    <div className="flex">
                        <li><FontAwesomeIcon icon={faPhoneAlt} color="lightBlue"/> 123 456 789</li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} color="lightBlue"/> Brooklyn, New York</li>
                        <li><FontAwesomeIcon icon={faClock} color="lightBlue"/> 123 456 789</li>
                    </div>
                    <div className="top-social-icons flex justify-end items-center">
                        <SocialIcon url="#" network="facebook" bgColor="lightBlue" style={iconSize}/>
                        <SocialIcon url="#" network="twitter" style={iconSize} bgColor="lightBlue"/>
                        <SocialIcon url="#" bgColor="lightBlue" network="linkedin" style={iconSize} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;