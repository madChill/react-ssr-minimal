import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './containers/App/';
import HtmlHelmet from './helpers/htmlTemplate';

const serverSideApp = ({ hash }) => {
    const clientFile = `client/${hash}.client.js`;
    const content = ReactDOMServer.renderToStaticMarkup(
        <HtmlHelmet script={clientFile}>
            <App />
        </HtmlHelmet>
    );
    return `
    <!DOCTYPE html>
      ${content}
  `;
};

module.exports = serverSideApp;

const counterApp = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return state.concat([action.text]);
        default:
            return state;
    }
};

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
