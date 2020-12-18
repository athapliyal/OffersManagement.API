import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";

import { Header } from "../Header";
import { routes } from "../../routes";

import { AuthStateProvider } from '../../context/Authentication';
import { AuthRoute } from '../../authentication';

function App() {
  return (
    <>
      <AuthStateProvider>
        <Router>
          <Header />
          <Route>
            <Switch>
              {routes.map((route, index) => {
                return route.isPrivateRoute ?
                  <AuthRoute key={index} path={route.path} exact={route.exact} children={<route.component />} />
                  :
                  <Route key={index} path={route.path} exact={route.exact} children={<route.component />} />
              })}
            </Switch>
          </Route>
        </Router>
      </AuthStateProvider>
    </>
  );
}

export default App;
