import React from 'react';
import Departments from '../Seriveces/Departments/Departments';
import Banner from './Banner/Banner';
import './Home.css';
import InnerInfo01 from './InnerInfo01/InnerInfo01';
import MeetOurDoctors from './MeetOurDoctors/MeetOurDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InnerInfo01></InnerInfo01>
            <Departments></Departments>
            <MeetOurDoctors></MeetOurDoctors>
        </div>
    );
};

export default Home;