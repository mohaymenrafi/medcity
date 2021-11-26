import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const DashboardHome = () => {
    const {user} = useAuth();
    return (
        <div className="px-16 py-12">
            <h2 className="sand font-semibold">Hi, <span className="text-darkBlue font-bold">{user?.displayName}</span> </h2>
            <p className="text-lg mt-4">This is your account dashboard. From your account dashboard. you can easily check & view your recent orders, manage your orders and account details.</p>
        </div>
    );
};

export default DashboardHome;