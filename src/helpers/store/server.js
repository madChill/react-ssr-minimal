import { createStore, combineReducers } from 'redux';
import { keyStore as key } from '../../helpers/const';
import { reducer as homeReducer } from '../../containers/home/redux';

export default ({ SSRData }) => {
    return createStore(
        combineReducers({
            [key.HOME]: homeReducer
        }),
        { [key.HOME]: SSRData }
    );
};
