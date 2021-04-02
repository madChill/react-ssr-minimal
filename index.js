import http from 'http';
import express from 'express';

import App from './src/server';
// console.log(App, "====App====");

const app = express();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html' });
    res.write(App);
    res.end();
});

const host = 'localhost';
const port = '8080';
app.listen(port, () => {
    console.log(
        `\x1b[32m%s\x1b[0m`,
        `Server is running at http://${host}:${port}`
    );
});
