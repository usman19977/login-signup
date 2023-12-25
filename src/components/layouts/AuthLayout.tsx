import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index';
import { LOGIN } from '../../constants/routes';



const AuthLayout: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to={LOGIN} />
    );
};

export default AuthLayout;
