import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './pages/user/user';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={undefined}/>
            <Route path="/users" component={User}/>
        </Switch>
    );
}

export default Routes;