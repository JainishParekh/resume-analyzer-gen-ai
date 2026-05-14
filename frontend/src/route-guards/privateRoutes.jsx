import React from 'react';
import { Navigate, Outlet } from 'react-router';
import Loader from '../assets/Loader';
import { useAuth } from '../hooks';

const PrivateRoutes = () => {
    const { user } = useAuth(); 

    // if (loading) {
    //     return <div><Loader width={"64"} height={"64"} /></div>;
    // }

    return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoutes;