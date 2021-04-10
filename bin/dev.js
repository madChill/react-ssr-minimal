const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const serverSideAppContent = require('../src/server');

const config = require('../webpack.config');
const compiler = webpack(config);

const app = express();
app.use(
    middleware(compiler, {
        serverSideRender: true
    })
);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    const content = serverSideAppContent({
        hash: res.locals.webpack.devMiddleware.stats.hash
    });
    console.log(content);
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.end(content);
});

const host = 'localhost';
const port = '8080';
app.listen(port, () => {
    console.log(
        `\x1b[32m%s\x1b[0m`,
        `Server is running at http://${host}:${port}`
    );
});
