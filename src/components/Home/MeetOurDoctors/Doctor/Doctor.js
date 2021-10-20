import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {name, position, bio, img} = props.doctor;
    return (
        <div className="department-single auto-rows-fr bg-white rounded shadow">
            <div>
                <img src={img} alt=""/>
                <h2 className="text-center text-3xl text-textBlue font-bold p-6">{name}</h2>
                <h3 className="text-center text-xl text-textBlue font-bold pb-4">{position}</h3>
                <p className="text-lg px-6 mb-6">{bio}</p>
            </div>
            
        </div>
    );
};

export default Doctor;