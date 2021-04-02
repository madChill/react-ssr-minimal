export const key = {
    // appReducer: "appReducer",
    // router: "router",
    HOME: "HOME",
}
export const Types = {
    "FETCH_LIST": "FETCH_LIST",
    "CHANGE_QUERY": "CHANGE_QUERY",
    "LOADING": "LOADING",
    "LOADING_DELETE": "LOADING_DELETE",
}


export const action = Types.map((i) => {
    return (payload) => ({
        type: key.room + i,
        payload
    })
})

export const LOADING = (state = INITIAL_STATE, action) => {
        return {...state, loading: action.payload }
    }
    // export default createReducer(INITIAL_STATE, HANDLERS)