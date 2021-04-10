import { readdir } from 'fs';
import path from 'path';

readdir(path.resolve(__dirname, 'dist'), {}, (err, files) => {
    console.log(files, '====files==dd=');
});
