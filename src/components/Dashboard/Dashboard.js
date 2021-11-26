import { faCalendarCheck, faCog, faCogs, faComments, faMoneyBillWave, faTh, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import AddServices from './AccountPages/AdminPages/AddServices/AddServices';
import MakeAdmin from './AccountPages/AdminPages/MakeAdmin/MakeAdmin';
import ManageAppointments from './AccountPages/AdminPages/ManageAppointments/ManageAppointments';
import ManageServices from './AccountPages/AdminPages/ManageServices/ManageServices';
import DashboardHome from './AccountPages/DashboardHome/DashboardHome';
import MyAppointments from './AccountPages/UserPages/MyAppointments/MyAppointments';
import Payment from './AccountPages/UserPages/Payment/Payment';
import Review from './AccountPages/UserPages/Review/Review';
import './Dashboard.css'

const Dashboard = () => {
    const {user} = useAuth();
    let {path, url} = useRouteMatch();
    return (
        <div className="container mx-auto py-16">
            {/* <div className="dashboard bg-darkBlue">
                <div className="container mx-auto px-4 py-28">
                    <h2 className="text-5xl font-semibold sand text-center text-white">My Account</h2>
                </div>
            </div> */}
            <div className="grid grid-cols-9 gap-12">
                <aside className="col-span-3">
                <div className="bg-white border-gray-50 border shadow-xl rounded-md sidebar-list py-8">
            <div>
                <img src={user?.photoURL} className="rounded-full mx-auto" alt="" />
                <h2 className="text-center text-lg font-semibold sand my-4">{user?.displayName}</h2>
            </div>
            <div>
                {/* user sidebar menu */}
                <div className="user">
                    <ul>
                        <NavLink exact to={`${url}`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                            <FontAwesomeIcon icon={faTh} />
                            </div>
                            <span>Dashboard</span>
                         </li></NavLink>

                        <NavLink to={`${url}/my-appointments`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faCalendarCheck} />
                            </div>
                            <span>My Appointments</span>
                        </li></NavLink>

                        <NavLink to={`${url}/payment`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8"> <FontAwesomeIcon icon={faMoneyBillWave} className="inline-block w-3" /> </div>
                            <span>Payment</span>
                        </li></NavLink>

                        <NavLink to={`${url}/give-review`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8"> <FontAwesomeIcon icon={faComments} className="inline-block w-3" /> </div>
                            <span>Review</span>
                        </li></NavLink>
                    </ul>
                </div>

                {/* admin sidebar menu   */}
                <div className="admin">
                    <ul>
                        <NavLink exact to={`${url}`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                            <FontAwesomeIcon icon={faTh} />
                            </div>
                            <span>Dashboard</span>
                         </li></NavLink>

                        <NavLink to={`${url}/manage-appointments`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faCalendarCheck} />
                            </div>
                            <span>Manage Appointments</span>
                        </li></NavLink>
                        <NavLink to={`${url}/manage-services`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faCogs} />
                            </div>
                            <span>Manage Services</span>
                        </li></NavLink>
                        <NavLink to={`${url}/add-services`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faCog} />
                            </div>
                            <span>Add Services</span>
                        </li></NavLink>
                        <NavLink to={`${url}/make-admin`} activeClassName="sidemenuActive"> <li className="text-darkBlue font-semibold py-3 px-4 hover:bg-lightBlue hover:text-white cursor-pointer border-white hover:border-darkBlue border-l-4  transition-all"> 
                            <div className="inline-block w-8">
                                <FontAwesomeIcon icon={faUserShield} />
                            </div>
                            <span>Make Admin</span>
                        </li></NavLink>
                    </ul>
                </div>
                {/* admin sidebar menu ends  */}
            </div>
        </div>
                </aside>
                <div className="col-span-6 border-gray-50 border shadow-xl rounded-md">
                    <Switch>
                        <PrivateRoute exact path={path}>
                            <DashboardHome></DashboardHome>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/my-appointments`}>
                            <MyAppointments></MyAppointments>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/payment`}>
                            <Payment></Payment>
                        </PrivateRoute>
                        <PrivateRoute path={`${path}/give-review`}>
                            <Review></Review>
                        </PrivateRoute>
                        {/* admin routes  */}
                        <AdminRoute path={`${path}/manage-appointments`}>
                            <ManageAppointments></ManageAppointments>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manage-services`}>
                            <ManageServices></ManageServices>
                        </AdminRoute>
                        <AdminRoute path={`${path}/add-services`}>
                            <AddServices></AddServices>
                        </AdminRoute>
                        <AdminRoute path={`${path}/make-admin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;