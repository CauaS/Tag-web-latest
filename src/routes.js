import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search/index';
import Dashboard from './pages/Dashboard/index';
import Scrum from './pages/Scrum/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Search} exact />
                <Route path='/dashboard' component={Dashboard} exact />
                <Route path='/scrum' component={Scrum} exact />
            </Switch>
        </BrowserRouter>
    )
}