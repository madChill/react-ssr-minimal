import React, { Fragment } from 'react';
import { Switch, Route, StaticRouter, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from '../home';
export default () => {
    return (
        <StaticRouter>
            <Helmet
                titleTemplate="%s - React.js Boilerplate"
                defaultTitle="React.js Boilerplate"
            >
                <meta
                    name="description"
                    content="A React.js Boilerplate application"
                />
            </Helmet>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/features" component={FeaturePage} /> */}
                {/* <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </StaticRouter>
    );
};
