import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuthState} from '../../context/Authentication/Authentication';

export const AuthRoute: React.FC = ({children}) => {
  const authState = useAuthState();
    console.log(JSON.stringify(authState));
    return (
        <Route render={({ location }) => authState.isAuthenticated 
        ? (children) 
        : (<Redirect to={{pathname: "/login", state: { from: location }}} />)
      }
    />
    )
}