import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import storeConfig, { history } from './appStore';
import App from './containers/App';
import isServer from './helpers/isServer';

export default (SSRData) => () => {
    const store = storeConfig({ SSRData });
    return (
        <Provider store={store}>
            {isServer ? (
                <App />
            ) : (
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            )}
        </Provider>
    );
};
