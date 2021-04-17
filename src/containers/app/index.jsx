import React, { Fragment } from 'react';
import { Switch, Route, StaticRouter, BrowserRouter } from 'react-router-dom';

import { isNode } from '../../helpers/const';

import HomePage from '../home';
import Demo from '../demo';
export default () => {
    const Router = isNode ? StaticRouter : BrowserRouter;
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/users" component={HomePage} />
                <Route exact path="/demo" component={Demo} />
                {/* <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </Router>
    );
};
