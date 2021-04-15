const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const serverSideAppContent = require('../src/server').default;
const serverMiddware = require('../src/helpers/serverMiddware').default;

const config = require('../webpack.config.js');
const compiler = webpack(config({ mode: 'development' }));
const app = express();
app.use(express.static('client'));
app.use(express.static('public'));

app.use(
    middleware(compiler, {
        serverSideRender: true
    })
);
app.get('/admin', async function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.end('admin site');
});

app.use(serverMiddware());

// use get func instead of middware use func to prevent double call func callback in router
app.get('/:name', function (req, res) {
    const content = serverSideAppContent({
        hash: res.locals.webpack.devMiddleware.stats.hash,
        req
    });
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.end(content);
});

const host = 'localhost';
const port = '8080';
app.listen(port, () => {
    console.log(
        `\x1b[32m%s\x1b[0m`,
        `Server is running attt http://${host}:${port}`
    );
});
