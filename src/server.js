import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import HtmlHelmet from './helpers/htmlTemplate';

const serverSideApp = ({ hash, req }) => {
    const clientFile = `/public/${hash}.client.js`;
    const AppServer = App(req.SSRData);
    const preloadedState = req.SSRData;
    const content = ReactDOMServer.renderToStaticMarkup(
        <HtmlHelmet script={clientFile}>
            <AppServer />
        </HtmlHelmet>
    );
    return `
    <!DOCTYPE html>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
          )}
        </script>
        <link rel="icon" href="/public/favicon.ico" />
      ${content}

  `;
};

export default serverSideApp;
