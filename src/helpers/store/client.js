import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { keyStore as key, api } from '../const';
import { reducer as homeReducer } from '../../containers/home/redux';

export const history = createBrowserHistory();

export default ({ SSRData }) => {
    return createStore(
        combineReducers({
            router: connectRouter(history),
            [key.HOME]: homeReducer
        }),
        { [key.HOME]: SSRData },
        applyMiddleware(
            thunk.withExtraArgument(api, key),
            routerMiddleware(history)
        )
    );
};
