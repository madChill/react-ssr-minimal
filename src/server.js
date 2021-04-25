import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

// import App from './App';
import App from './containers/App';
import HtmlHelmet from './helpers/htmlTemplate';
import storeConfig from './helpers/store/server';

const serverSideApp = ({ hash, req }) => {
    const clientFile = `/public/${hash}.client.js`;
    const cssFile = `/public/${hash}.client.css`;
    const preloadedState = req.SSRData;
    const store = storeConfig({ SSRData: preloadedState });

    const content = ReactDOMServer.renderToStaticMarkup(
        <HtmlHelmet script={clientFile}>
            <Provider store={store}>
                <App url={req.url} />
            </Provider>
        </HtmlHelmet>
    );
    return `
    <!DOCTYPE html>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState || {}
          ).replace(/</g, '\\u003c')}
        </script>
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="stylesheet" href="${cssFile}">
      ${content}

  `;
};

export default serverSideApp;
