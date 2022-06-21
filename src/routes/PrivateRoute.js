import React from 'react';
import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({children, ...rest}) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Route {...rest} render={() => (isLoggedIn ? children : children)} />
    );
};

export default PrivateRoute;
