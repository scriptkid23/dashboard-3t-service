import { handleActions, createActions } from 'redux-actions';

export const actions = createActions({
    "SET_VALUE": [meta => meta, payload => payload],
    "SET_DEFAULT": [meta => meta, payload => payload],

    "LOGIN": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload]
    },
    "SIGNUP": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload],
    },
    "LOGOUT": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload],
    },
    "CONFIRM": {
        "REQUESTED": [meta => meta, payload => payload],
        "SUCCEEDED": [meta => meta, payload => payload],
        "FAILED": [meta => meta, payload => payload],
    },


});
const defaultState = {
    loading: false,
    message: "",
    fullname: "",
    password: "",
    email: "",
    roles: ['user'],
    variant: "",
}
const reducers = handleActions({
    [actions.confirm.requested] : (state,action) => {
        return({
            ...state,
            loading : true,
        })
    },
    [actions.confirm.succeeded] : (state,action) => {
    
        return({
            ...state,
            message : "confirm succeeded",
            variant : "success",
            loading : false,
        })
    },
    [actions.confirm.failed] : (state,action) => {
        
        return({
            ...state,
            message : action.payload.data.message,
            variant : "danger",
            loading : false,
        })
    },
    [actions.setValue]: (state, action) => {
        return ({
            ...state,
            [action.payload.name]: action.payload.value
        })
    },
    [actions.login.requested]: (state, action) => {
        return ({
            ...state,
            loading: true,
        })
    },
    [actions.login.succeeded]: (state, action) => {
        return ({
            ...state,
            loading: false,
            message: "login succeeded",
            variant: "success",

        })
    },
    [actions.login.failed]: (state, action) => {
        return ({
            ...state,
            loading: false,
            message: action.payload.data.message,
            variant: "danger"
        })
    },
    [actions.signup.requested]: (state, action) => {
        return ({
            ...state,
            loading: true,
        })
    },
    [actions.signup.succeeded]: (state, action) => {
        return ({
            ...state,
            message: "vertification succeeded",
            variant: "success",
            loading : false,
        })
    },
    [actions.signup.failed]: (state, action) => {
        return ({
            ...state,
            message: action.payload.data.message,
            variant: "danger",
            loading : false,
        })
    },
    [actions.logout.requested]: (state, action) => {
        return ({
            ...state,
            loading: true,
        })
    },
    [actions.logout.failed]: (state, action) => {
        return ({
            ...state,
            loading: false,
        })
    },
    [actions.logout.succeeded]: (state, action) => {
        return ({
            ...state,
            loading: false,
        })
    },
    [actions.setDefault]: (state, action) => {
        return ({
            ...defaultState,
        })
    }

},
    defaultState
)
export default reducers;