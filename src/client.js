import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
const preloadedState = window.__PRELOADED_STATE__;
const AppClient = App(preloadedState);

ReactDOM.render(<AppClient />, document.getElementById('react-root'));
