import { faCalendarCheck, faComments, faMoneyBillWave, faTh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Sidebar.css';

const Sidebar = () => {
    const {user} = useAuth();
    return (
        <div className="bg-white border-gray-50 border shadow-xl rounded-md sidebar-list py-8">
            <div>
                <img src={user?.photoURL} className="rounded-full mx-auto" alt="" />
                <h2 className="text-center text-lg font-semibold sand my-4">{user?.displayName}</h2>
            </div>
            <div>
                <div className="user">
                    <ul>
                        <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                            <FontAwesomeIcon icon={faTh} />
                            </div>
                            <span>Dashboard</span>
                         </li>
                        <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faCalendarCheck} />
                            </div>
                            <span>My Appointments</span>
                        </li>
                        <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8"> <FontAwesomeIcon icon={faMoneyBillWave} className="inline-block w-3" /> </div>
                            <span>Payment</span>
                        </li>
                        <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8"> <FontAwesomeIcon icon={faComments} className="inline-block w-3" /> </div>
                            <span>Review</span>
                        </li>
                    </ul>
                </div>
                <div className="admin hidden">
                    <ul>
                        <li className="text-darkBlue font-semibold py-3">Dashboard</li>
                        <li className="text-darkBlue font-semibold py-3">Manage Appointments</li>
                        <li className="text-darkBlue font-semibold py-3">Manage Services</li>
                        <li className="text-darkBlue font-semibold py-3">Add Services</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;