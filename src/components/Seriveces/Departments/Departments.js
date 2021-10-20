import React from 'react';
import useDepartment from '../../../hooks/useDepartment';
import './Departments.css';
import DepartmentSingle from './DepartmentSingple/DepartmentSingle';

const Departments = () => {
    const [departments] = useDepartment();
    return (
        <div className="departments">
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-center text-4xl sm:text-5xl font-semibold text-textBlue">Our Departments</h2>
                <p className="text-textBlue text-xl text-center mt-8 sm:w-6/12 mx-auto font-medium">We provide all aspects of medical practice for your whole family, including general check-ups or assisting you with specific injuries.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 auto-rows-max">
                    {
                       departments.map(department => <DepartmentSingle key={department.id} department={department} />) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;