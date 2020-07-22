import React from 'react';
import {Redirect, Route} from "react-router-dom"
import {getFromLocalStorage} from "../../helpers/browserStorage"

export const ProtectedRoute = ({ component: Component, ...rest }) => {

    let isAuthenticated = false;

    let token = getFromLocalStorage('token');

    if(token === 'null') {
        token = null;
        localStorage.removeItem('token');
    }

    if(token) {
        isAuthenticated = true;
    }

    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        )} />
    )
};