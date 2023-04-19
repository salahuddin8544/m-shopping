import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PRODUCT_CONTEXT, USE_CONTEXT } from '../Context/ProductProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = USE_CONTEXT(PRODUCT_CONTEXT)
    if(user && user.uid){
        return children
    }
    console.log('this is private', user)
    return (
          <Navigate to= '/login' state={{ from: location }} replace > </Navigate>
    );
};

export default PrivateRoute;