import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import routeList from '../../helpers/routerList';
import Layout from '../../components/layouts';
import Review from './reviews';
export default () => (
    <Layout>
        this is demo page
        <Switch>
            <Route exact path={routeList.DEMO} component={Review} />
            <Route exact path={routeList.DEMO_REVIEW} component={Review} />
            {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
    </Layout>
);
