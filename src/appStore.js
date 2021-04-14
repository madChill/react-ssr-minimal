import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import isServer from './helpers/isServer';
import { reducer as homeReducer } from './containers/home/redux';

export const history = isServer ? {} : createBrowserHistory();
const api = 'https://60746332066e7e0017e79c40.mockapi.io/';
export const key = {
    HOME: 'HOME',
    USERS: 'USERS'
};

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
// let router = {};
// let routerMiddlewareClient = routerMiddleware({});
// if (!isServer) {
//     router = connectRouter(history);
//     routerMiddlewareClient = routerMiddleware(history);
// }
const rootReducers = () =>
    combineReducers({
        router: connectRouter(history),
        [key.HOME]: homeReducer
    });

// this logic init store after wait server get list users(server side middware express)
export default ({ SSRData }) => {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            [key.HOME]: homeReducer
        }),
        { todo: state, [key.HOME]: SSRData },
        applyMiddleware(
            thunk.withExtraArgument(api, key),
            routerMiddleware(history)
        )
    );
};
