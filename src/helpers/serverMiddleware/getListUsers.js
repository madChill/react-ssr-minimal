import axios from 'axios';
import { api } from '../const';

export default (req, res, next) => {
    return axios
        .get(api + '/todo')
        .then((resp) => {
            req.SSRData = {
                error: null,
                data: resp.data
            };
            next();
        })
        .catch((err) => {
            req.SSRData = {
                error: err,
                data: null
            };
            next();
        });
};
