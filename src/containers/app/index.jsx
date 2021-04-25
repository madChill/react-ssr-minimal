import React, { Fragment } from 'react';
import { Switch, Route, StaticRouter, BrowserRouter } from 'react-router-dom';

import { isNode } from '../../helpers/const';
import routeList from '../../helpers/routerList';

import HomePage from '../home';
import Demo from '../demo';

export default ({ url = '/' }) => {
    const props = isNode ? { location: url } : {};
    const Router = isNode ? StaticRouter : BrowserRouter;
    return (
        <Router {...props} location={url}>
            <Switch>
                <Route exact path={routeList.HOME} component={HomePage} />
                <Route exact path={routeList.USERS} component={HomePage} />
                <Route path={routeList.DEMO} component={Demo} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Router>
    );
};
