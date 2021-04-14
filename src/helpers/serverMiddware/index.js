import { Router } from 'express';

import route from '../routerList';
import getListUsers from './getListUsers';
export default () => {
    const router = new Router();
    router.use(route.HOME, (req, res, next) => next());
    router.use(route.USERS, getListUsers);
    return router;
};
