import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from "./home";

export default () => {
    return (
        <Fragment>
            <Helmet
                titleTemplate="%s - React.js Boilerplate"
                defaultTitle="React.js Boilerplate"
            >
                <meta name="description" content="A React.js Boilerplate application" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/features" component={FeaturePage} /> */}
                {/* <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </Fragment>
    )
}