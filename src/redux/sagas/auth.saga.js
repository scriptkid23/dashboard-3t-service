import {takeEvery,put,call,select} from 'redux-saga/effects';
import {Login,ForgotPassword, ConfirmRegister,
    ConfirmForgotPassword,Register,Logout, getUserDetail} from '../../services/ServerService'
import CookieService from '../../services/CookieService'
const getAuthState = (state) => state.auth;
function* loginRequested(params){
    try{
        const payload = yield select(getAuthState);
        const {data,status} = yield call(Login,payload);
        if(status === 200){
            yield put({type : "LOGIN/SUCCEEDED",payload : {data,status}})
            CookieService.set('token',data.token)
            // localStorage.setItem("email",data.email)
            params.payload.callback.push('/dashboard/chat-room')
        }
        else{
            yield put({type : "LOGIN/FAILED",payload : {data,status}})
        }
    }catch(e){
        yield put({type : "LOGIN/FAILED",payload : {data : {message : e}}})
    }
}
function* forgotRequested(params) {
    try{
    
        let {data,status} = yield call(ForgotPassword,params.payload.email);
        if(status === 200){
            yield put({type:"FORGOT/SUCCEEDED",payload:{data,status}})
            params.payload.callback.push({
                pathname : "/auth/confirm",
                state :{
                    from : 'forgot'
                }
            })
        }
        else{
            yield put({type : "FORGOT/FAILED",payload : {data,status}})

        }
    }catch(e){
            yield put({type : "FORGOT/FAILED",payload : {data : {message : e}}})
    }
}
function* confirmRequested(params){
    try{
        const payload = yield select(getAuthState);
        let from = params.payload.callback.location.state.from;
            if(from === 'signup'){
                let {data,status} = yield call(ConfirmRegister,{otp: params.payload.otp,time : payload.time});
                if(status === 200){
                    yield put({type:"CONFIRM/SUCCEEDED",payload:{data,status}})
                    CookieService.set('token',data.token)
                    // localStorage.setItem("email",data.email)
                    params.payload.callback.push('/dashboard/chat-room')
                }
                else{
                    yield put({type:"CONFIRM/FAILED",payload : {data,status}})
                }
            }
            if(from === 'forgot'){
                let {data,status} = yield call(ConfirmForgotPassword,{otp: params.payload.otp,time : payload.time});
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
        yield put({type : "CONFIRM/FAILED",payload : {data : {message : e}}})
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
        yield put({type : "SIGNUP/FAILED",payload : {data : {message : e}}})
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
        yield put({type : "LOGOUT/FAILED",payload : {data : {message : e}}})
    }
}
function* getUserDetailRequested() {
    try{
        const token = CookieService.get('token')
        const {data,status} = yield call(getUserDetail,token);
        if(status === 200){
            yield put({type : "GET_USER_DETAIL/SUCCEEDED",payload :{data,status}})
        }
        else{
            yield put({type : "GET_USER_DETAIL/FAILED",payload :{data,status}})
        }
    }
    catch(e){
        yield put({type : "GET_USER_DETAIL/FAILED",payload :{data : {message : e}}})
    }
}
export default function* authSaga(){
    yield takeEvery("LOGIN/REQUESTED",loginRequested)
    yield takeEvery("LOGOUT/REQUESTED",logoutRequested)
    yield takeEvery("SIGNUP/REQUESTED",signupRequested)
    yield takeEvery("CONFIRM/REQUESTED",confirmRequested)
    yield takeEvery("FORGOT/REQUESTED",forgotRequested)
    yield takeEvery("GET_USER_DETAIL/REQUESTED",getUserDetailRequested)
}