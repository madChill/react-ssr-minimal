import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { keyStore as key, api, isNode } from './helpers/const';
import { reducer as homeReducer } from './containers/home/redux';

// this one to be check on server we do not have a history
// this logic init store after wait server get list users(server side middware express)
export let history = {};
if (!isNode) {
    history = createBrowserHistory();
}
export default ({ SSRData }) => {
    if (!isNode) {
        return createStore(
            // all reducers
            combineReducers({
                router: connectRouter(history),
                [key.HOME]: homeReducer
            }),
            // init state for ssr, need to pass init store go through client follow this guide: https://redux.js.org/recipes/server-rendering
            { [key.HOME]: SSRData },
            applyMiddleware(
                thunk.withExtraArgument(api, key),
                routerMiddleware(history)
            )
        );
    } else {
        return createStore(
            // all reducers
            combineReducers({
                [key.HOME]: homeReducer
            }),
            { [key.HOME]: SSRData }
        );
    }
};
