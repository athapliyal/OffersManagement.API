import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import { Header } from "../Header";
import { routes } from "../../routes";

import {AuthStateProvider} from '../../context/Authentication/Authentication';
import {AuthRoute} from '../Authentication/index';

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
                        return <AuthRoute key={index} {...route}>{route.component}</AuthRoute>
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
