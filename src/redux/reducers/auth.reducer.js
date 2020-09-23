import {handleActions,createActions} from 'redux-actions';

export const actions = createActions({

    "LOGIN": {
        "LOGIN_REQUESTED"   : [meta => meta, payload => payload],
        "LOGIN_SUCCEEDED"   : [meta => meta, payload => payload],
        "LOGIN_FAILED"      : [meta => meta, payload => payload]
    },
    "REGISTER" : {
        "REGISTER_REQUESTED" : [meta => meta, payload => payload],
        "REGISTER_SUCCEEDED" : [meta => meta, payload => payload],
        "REGISTER_FAILED"    : [meta => meta, payload => payload],
    },
    "LOGOUT":{
        "LOGOUT_REQUESTED"  : [meta => meta, payload => payload],
        "LOGOUT_SUCCEEDED"  : [meta => meta, payload => payload],
        "LOGOUT_FAILED"     : [meta => meta, payload => payload],
    },
    

});
const defaultState = {
    loading : false,
    message : "",
    username : "",
    password : "",
    email : "",
    roles : ['user'],
    variant : "",
}
const reducers = handleActions({
    [actions.login.loginRequested] : (state,action) =>{
        return({
            ...state,
            username : action.payload.username,
            password : action.payload.password,
            email : action.payload.email,
            loading : true,
        })
    },
    [actions.login.loginSucceeded] : (state,action) =>{
        return({
            ...state,
            loading : false,
            message : action.payload.message,
            variant : "success"
        })
    },
    [actions.login.loginFailed] : (state,action) =>{
        return({
            ...state,
            loading : false,
            message : action.payload.message,
            variant : "danger"
        })
    },

},
    defaultState
)
export default reducers;