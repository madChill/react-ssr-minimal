import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import storeConfig, { history } from './helpers/store/client';
import App from './containers/App';

const preloadedState = window.__PRELOADED_STATE__;
const store = storeConfig({ SSRData: preloadedState });
// console.log(preloadedState, '=============preloadedState++========');
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('react-root')
);
