import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import storeConfig, { history } from './appStore';
import App from './containers/App';
import { isNode } from './helpers/const';

export default (SSRData) => () => {
    const store = storeConfig({ SSRData });
    const BindHistory = !isNode ? ConnectedRouter : Fragment;
    return (
        <Provider store={store}>
            <BindHistory history={history}>
                <App />
            </BindHistory>
        </Provider>
    );
};
