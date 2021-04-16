import React, { Fragment } from 'react';
import { Switch, Route, StaticRouter, BrowserRouter } from 'react-router-dom';

import HomePage from '../home';
export default () => {
    return (
        <StaticRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/features" component={FeaturePage} /> */}
                {/* <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </StaticRouter>
    );
};
