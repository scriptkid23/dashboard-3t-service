import {takeEvery,put,call,select} from 'redux-saga/effects';
import {Login,ForgotPassword, ConfirmRegister,
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
function* confirmRequested(params){
    try{
        let from = params.payload.callback.location.state.from;
            if(from === 'signup'){
                let {data,status} = yield call(ConfirmRegister,params.payload.otp);
                if(status === 200){
                    yield put({type:"CONFIRM/SUCCEEDED",payload:{data,status}})
                    CookieService.set('token',data.token)
                    params.payload.callback.push('/dashboard/chat-room')
                }
                else{
                    yield put({type:"CONFIRM/FAILED",payload : {data,status}})
                }
            }
            if(from === 'forgot'){
                let {data,status} = yield call(ConfirmForgotPassword,params.payload.otp);
                if(status === 200){
                    yield put({type:"CONFIRM/SUCCEEDED",payload:{data,status}})
                    CookieService.set('token',data.token)
                    params.payload.callback.push('/dashboard/chat-room')
                }
                else{
                    yield put({type:"CONFIRM/FAILED",payload : {data,status}})
                }
            }
    }
    catch(e){
        yield put({type : "CONFIRM/FAILED",payload : e})
    }
}
function* signupRequested(params){
    try{
        const payload = yield select(getAuthState);
        const {data,status} = yield call(Register,payload);
        if(status === 200){
            yield put({type:"SIGNUP/SUCCEEDED",payload:{data,status}})
            params.payload.callback.push({
                pathname : "/auth/confirm",
                state : {
                    from : 'signup'
                }
            })
        }
        else{
            yield put({type : "SIGNUP/FAILED",payload : {data,status}})
        }
    }
    catch(e){
        yield put({type : "SIGNUP/FAILED",payload : e})
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
    yield takeEvery("SIGNUP/REQUESTED",signupRequested)
    yield takeEvery("CONFIRM/REQUESTED",confirmRequested)
}