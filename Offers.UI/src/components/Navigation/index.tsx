import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import {Header} from '../Header/index';
import {routes} from './routes-constants';


export const Navigation: React.FC = () => {
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
    )
}