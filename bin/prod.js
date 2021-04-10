const express = require('express');
const serverSideAppContent = require('../src/server').default;

const app = express();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    const content = serverSideAppContent({
        hash: __webpack_hash__
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
