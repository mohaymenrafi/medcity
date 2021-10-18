import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import InnerInfo01 from './InnerInfo01/InnerInfo01';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InnerInfo01></InnerInfo01>
        </div>
    );
};

export default Home;