import { Router } from 'express';

import i18n from '../i18n';
import route from '../routerList';
import getListUsers from './getListUsers';

export default () => {
    const router = new Router();
    router.use(route.HOME, (req, res, next) => next());
    router.use(route.USERS, getListUsers);

    // validate the route is allowed,that's in series of list route(route.HOME, route.USERS)
    router.use('/:name', (req, res, next) => {
        if (Object.keys(route).find((e) => route[e] == '/' + req.params.name)) {
            return next();
        }
        res.status(400).end(i18n.service404);
    });
    return router;
};
