import {handleActions,createActions} from 'redux-actions';

export const actions = createActions({
    "SET_VALUE" : [meta => meta, payload => payload],

    "LOGIN": {
        "REQUESTED"   : [meta => meta, payload => payload],
        "SUCCEEDED"   : [meta => meta, payload => payload],
        "FAILED"      : [meta => meta, payload => payload]
    },
    "REGISTER" : {
        "REQUESTED" : [meta => meta, payload => payload],
        "SUCCEEDED" : [meta => meta, payload => payload],
        "FAILED"    : [meta => meta, payload => payload],
    },
    "LOGOUT":{
        "REQUESTED"  : [meta => meta, payload => payload],
        "SUCCEEDED"  : [meta => meta, payload => payload],
        "FAILED"     : [meta => meta, payload => payload],
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
    [actions.setValue] : (state,action) =>{
        return({
            ...state,
            [action.payload.name] : action.payload.value
        })
    },
    [actions.login.requested] : (state,action) =>{
        return({
            ...state,
            loading : true,
        })
    },
    [actions.login.succeeded] : (state,action) =>{
        return({
            ...state,
            loading : false,
            message : "login succeeded",
            variant : "success",
          
        })
    },
    [actions.login.failed] : (state,action) =>{
        return({
            ...state,
            loading : false,
            message : action.payload.data.message,
            variant : "danger"
        })
    },
    [actions.logout.requested] : (state,action) =>{
        return({
            ...state,
            loading : true,
        })
    },

},
    defaultState
)
export default reducers;