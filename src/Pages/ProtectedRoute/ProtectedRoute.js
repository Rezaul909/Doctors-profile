import { getAuth } from 'firebase/auth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';


const auth = getAuth(app);

const ProtectedRoute = (children) => {
    const [user] = (auth)
    const location = useLocation();

    if(!user){
        return <Navigate to='/Login' state={{form:location}} replace></Navigate>
    }
    return children;
};

export default ProtectedRoute;