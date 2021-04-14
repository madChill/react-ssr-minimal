import { key } from '../../appStore';
import { getListTodo } from './effect';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null
};

export const Types = {
    FETCH_LIST: 'FETCH_LIST',
    LOADING: 'LOADING'
};

export const reducer = (state = INITIAL_STATE, payload) => {
    switch (payload.type) {
        case Types.LOADING:
            return { ...state, loading: payload.data };
        case Types.FETCH_LIST:
            return { ...state, data: payload.data };
        default:
            return state;
    }
};

// mapping
export const mapStateToProps = (state) => {
    return {
        [key.HOME]: state[key.HOME]
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        SSREffect: () => dispatch(getListTodo())
        // reset: () => dispatch({ type: 'RESET' })
    };
};
