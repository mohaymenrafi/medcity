import React from 'react';
import { NavLink } from 'react-router-dom';
import './DepartmentSingple.css';

const DepartmentSingle = (props) => {
    const {title, img, info} = props.department
    return (
        <div className="department-single auto-rows-fr bg-white rounded shadow">
            <div>
                <img src={img} alt=""/>
                <h2 className="text-center text-3xl text-textBlue font-bold p-6">{title}</h2>
                <p className="text-lg px-6">{info}</p>
                <NavLink className="block p-6" to="/services"> <button className="capitalize py-3 px-6 bg-lightGreen rounded text-black font-semibold text-lg">view more</button> </NavLink>
            </div>
            
        </div>
    );
};

export default DepartmentSingle;