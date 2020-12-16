import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';


import './App.scss';

import {Header} from '../Header';
import {routes} from '../Routes';



function App() {

  return (
    <>
      <Router>
          <Header />
          <Route>
              <Switch>
                  {routes.map((route, index) => {
                      return <Route key={index} path={route.path} exact={route.exact} children={<route.component/>}/>
                  })}
              </Switch>  
          </Route>
      </Router>
    </>
  );
}

export default App;
