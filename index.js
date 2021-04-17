const express = require('express');
const serverSideAppContent = require('./src/server').default;
const serverMiddleware = require('./src/helpers/serverMiddleware').default;
const app = express();
app.get('/server.js', function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.end('admin site');
});
app.use(express.static(__dirname));
app.use(serverMiddleware());

app.use(function (req, res) {
    const content = serverSideAppContent({
        hash: __webpack_hash__,
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
        `Server is running at http://${host}:${port}`
    );
});
