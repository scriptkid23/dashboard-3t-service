import {takeEvery,put,call,select} from 'redux-saga/effects';
import {Login,ForgotPassword,
    ConfirmForgotPassword,Register,Logout} from '../../services/ServerService'
const getAuthState = (state) => state.auth;
function* loginRequested(params){
    try{
        const params = yield select(getAuthState);
        const {data,status} = yield call(Login,params);
        if(status === 200){
            yield put({
                type : "LOGIN/LOGIN_SUCCEEDED",
                payload : {data,status}
            })
        }
        else{
            yield put({
                type : "LOGIN/LOGIN_FAILED",
                payload : status,
            })
        }
    }catch(e){
        yield put({
            type : "LOGIN/LOGIN_FAILED",
            payload : e
        })
    }
}

export default function* authSaga(){
    yield takeEvery("LOGIN/LOGIN_REQUESTED",loginRequested)
}