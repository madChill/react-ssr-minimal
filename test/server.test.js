import React from 'react';
import serverSideApp from '../src/server';
// export const ReactDOMServer = {};
// ReactDOMServer.renderToStaticMarkup = jest.fn();
jest.mock('react-redux');
jest.mock('../src/containers/App/', () => {
    return () => {
        return <>app</>;
    };
});
test('always return html content', () => {
    const ssr = jest.fn(serverSideApp);
    ssr();
    expect(ssr).toHaveReturned();
});
