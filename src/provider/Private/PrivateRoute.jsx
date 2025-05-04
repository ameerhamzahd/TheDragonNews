import React, { use } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../../components/Loader/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (user && user?.email) {
        return children;
    }

    if (loading) {
        return <Loader></Loader>;
    }

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>


};

export default PrivateRoute;