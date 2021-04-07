import React from 'react';
import Home from './containers/home/index.jsx';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import Hello from './components/hellomsg.jsx';
import App from './containers/app';

export default `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
     <title>Getting Started</title>
     <title>Asset Management</title>
    </head>
    <body>
        <div id="react-root">
          ${ReactDOMServer.renderToStaticMarkup(<App/>)}
        </div>
      </body>
  </html>
`;

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Home />
            </Provider>
        </div>
    );
};
const counterApp = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat([action.text]);
        default:
            return state;
    }
};
const store = createStore(counterApp, ['Redux 1']);

const preloadedState = store.getState();
function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/recipes/server-rendering/#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(
                preloadedState
            ).replace(/</g, '\\u003c')}
          </script>
          <script src="https://fb.me/react-0.14.0.js"></script>
          <script src="https://fb.me/react-dom-0.14.0.js"></script>
        </body>
      </html>
      `;
}

// export default renderFullPage(ReactDOMServer.renderToStaticMarkup(<App />), preloadedState);
