import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthState} from '../../context/Authentication';

export const PrivateRouteWrapper: React.FC = ({children, ...rest}) => {
    const {authState} = useAuthState();
    return (
        <Route {...rest} render={({ location }) => authState.isAuthenticated 
        ? (children) 
        : (<Redirect to={{pathname: "/", state: { from: location }}} />)
      }
    />
    )
}