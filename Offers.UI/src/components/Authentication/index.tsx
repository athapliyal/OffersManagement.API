import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../context/Authentication/Authentication';

interface IAuthRoute {
  key: number, 
  path: string,
  exact: boolean,
}

export const AuthRoute: React.FC<IAuthRoute> = (props) => {

    const {authState} = useContext(AuthContext);

    console.log( 'AuthenticationWrapper ' + JSON.stringify(authState));
    return (
        <Route key={props.key} path={props.path} exact={props.exact} render={({ location }) => authState.isAuthenticated
        ? (props.children) 
        : (<Redirect to={{pathname: "/login", state: { from: location }}} />)
      }
    />
    )
}