import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return (
            <div className=" h-screen w-screen z-50 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        )
    }
    return (
        <Route
            {...rest} 
            render={({location}) => user.email || user.displayName ? children : <Redirect
                to={
                    {
                        pathname:"/login",
                        state:{from:location}
                    }
                }
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;