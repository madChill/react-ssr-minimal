import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../../components/layouts';
import Review from './reviews';
export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Review} />
            {/* <Route path="" component={NotFoundPage} /> */}
        </Switch>
    </Layout>
);
