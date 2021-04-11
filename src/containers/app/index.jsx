import React, { Fragment } from 'react';
import { Switch, Route, StaticRouter, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from '../home';
export default () => {
    return (
        <StaticRouter>
            <Helmet
                titleTemplate="%s - minimal react server side rendering"
                defaultTitle="minimal react server side rendering"
            >
                <meta
                    name="description"
                    content="minimal react server side rendering application"
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
