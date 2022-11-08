import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading) {
        return <div>Loading...</div>
    }

    if(!user){
        return <Navigate to='/login'></Navigate>;
    }
    return children;
};

export default PrivetRoute;