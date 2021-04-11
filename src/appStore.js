import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import isServer from './helpers/isServer';
export const history = isServer ? {} : createBrowserHistory();

const state = [
    {
        key: 2,
        title: 'homework',
        done: true
    }
];

const ToDoReducers = (initState = state, payload) => {
    switch (payload.type) {
        case 'DONE':
            return [
                ...initState.slice(payload.index),
                { ...initState[payload.index], done: true }
            ];
        case 'ADD':
            return [...initState, payload];
        default:
            return initState;
    }
};

// this one to be check on server we do not have a history
let router = {};
let routerMiddlewareClient = routerMiddleware({});
if (!isServer) {
    router = connectRouter(history);
    routerMiddlewareClient = routerMiddleware(history);
}
const rootReducers = () =>
    combineReducers({
        router: router,
        todo: ToDoReducers
    });

export default () => {
    return createStore(
        rootReducers(),
        { todo: state },
        compose(applyMiddleware(routerMiddlewareClient))
    );
};
