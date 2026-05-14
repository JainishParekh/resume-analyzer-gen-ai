import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../hooks';

const PublicRoutes = () => {
    // TODO: This wo'nt be of any use... Why ? Because when anyone refreshes or uses deeplink then context api will also gets refreshed and have no value stored hence user will get logged out  
    const { user } = useAuth();

    if (user) {
        <Navigate to="/" replace />
    }

    // console.log("Public routes ", user)

    return <Outlet />;
};

export default PublicRoutes;