import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../context/Authentication/Authentication';

export const AuthRoute: React.FC = ({children}) => {

    const {authState} = useContext(AuthContext);

    console.log( 'AuthenticationWrapper ' + JSON.stringify(authState.authState));
    return (
        <Route render={({ location }) => authState.authState.isAuthenticated
        ? (children) 
        : (<Redirect to={{pathname: "/login", state: { from: location }}} />)
      }
    />
    )
}