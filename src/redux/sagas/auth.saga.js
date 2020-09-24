import {takeEvery,put,call,select} from 'redux-saga/effects';
import {Login,ForgotPassword,
    ConfirmForgotPassword,Register,Logout} from '../../services/ServerService'
import CookieService from '../../services/CookieService'
const getAuthState = (state) => state.auth;
function* loginRequested(params){
    try{
        const payload = yield select(getAuthState);
        const {data,status} = yield call(Login,payload);
        if(status === 200){
            yield put({type : "LOGIN/SUCCEEDED",payload : {data,status}})
            CookieService.set('token',data.token)
            params.payload.callback.push('/dashboard/chat-room')
        }
        else{
            yield put({type : "LOGIN/FAILED",payload : {data,status}})
        }
    }catch(e){
        yield put({type : "LOGIN/FAILED",payload : e})
    }
}

function *logoutRequested(params){
    try{
        const token = CookieService.get('token')
        const {data,status} = yield call(Logout,token);
        if(status === 200){
            yield put({type : "LOGOUT/SUCCEEDED",payload : {data,status}})
            CookieService.remove('token')
            params.payload.callback.push('/auth/login')
        }
        else{
            yield put({type : "LOGOUT/FAILED",payload : {data,status}})
        }
    }catch(e){
        yield put({type : "LOGOUT/FAILED",payload : e})
    }
}
export default function* authSaga(){
    yield takeEvery("LOGIN/REQUESTED",loginRequested)
    yield takeEvery("LOGOUT/REQUESTED",logoutRequested)
}