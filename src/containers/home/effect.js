import axios from 'axios';

import { Types } from './redux';

export function getListTodo() {
    return function (dispatch, getState, api) {
        return axios
            .get(api + '/todo')
            .then((res) => {
                dispatch({ data: res.data, type: Types.FETCH_LIST });
            })
            .catch((err) => {});
    };
}
