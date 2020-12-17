import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import { Header } from "../Header";
import { routes } from "../../routes";
import {AuthStateProvider} from '../Authentication/index';
import {PrivateRouteWrapper} from '../Authentication/PrivateRouteWrapper';

function App() {
  return (
    <>
      <AuthStateProvider>
        <Router>
            <Header />
              <Route>        
                  <Switch>
                    {routes.map((route, index) => {
                      if(route.isPrivateRoute) {
                        return <PrivateRouteWrapper key={index}>{route.component}</PrivateRouteWrapper>
                      } else {
                        return <Route key={index} path={route.path} exact={route.exact} children={<route.component />} />
                      }
                    })}
                  </Switch>
              </Route>
        </Router>
      </AuthStateProvider>
    </>
  );
}

export default App;
