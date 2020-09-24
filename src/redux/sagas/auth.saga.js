import {takeEvery,put,call,select} from 'redux-saga/effects';
import {Login,ForgotPassword,
    ConfirmForgotPassword,Register,Logout} from '../../services/ServerService'
import CookieService from '../../services/CookieService'
const getAuthState = (state) => state.auth;
function* loginRequested(params){
    try{
        const payload = yield select(getAuthState);
        const {data,status} = yield call(Login,payload);
        console.log(params)
        if(status === 200){
            yield put({type : "LOGIN/LOGIN_SUCCEEDED",payload : {data,status}})
            CookieService.set('token',data.token)
            params.payload.callback.push('/dashboard/chat-room')
        }
        else{
            yield put({type : "LOGIN/LOGIN_FAILED",payload : {data,status}})
        }
    }catch(e){
        yield put({type : "LOGIN/LOGIN_FAILED",payload : e})
    }
}

export default function* authSaga(){
    yield takeEvery("LOGIN/LOGIN_REQUESTED",loginRequested)
}