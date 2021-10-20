import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServiceLists.css';

const ServiceLists = (props) => {
    const {img, title, shortInfo,id} = props.service;
    
    return (
        <div className="bg-white rounded-lg p-6 shadow">
            <img src={img} alt="" />
            <h2 className="my-6 sand text-3xl text-textBlue font-bold">{title}</h2>
            <p className="text-lg">{shortInfo}</p>
            <NavLink to={`/service/${id}`}> <button className="px-4 py-2 block mt-6 bg-darkBlue rounded-full text-white hover:bg-lightBlue">View Details</button> </NavLink>
        </div>
    );
};

export default ServiceLists;