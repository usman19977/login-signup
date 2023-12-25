import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index';
import { DASHBOARD } from '../../constants/routes';


const UnAuthLayout: React.FC = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        isAuthenticated ? <Navigate to={DASHBOARD} /> : <Outlet />
    );
};

export default UnAuthLayout;
