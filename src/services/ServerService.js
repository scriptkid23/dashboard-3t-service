import Axios from 'axios';
import API from './api'
function Login(params) {
    console.log(params)
    return Axios({
        baseURL: API.BASEURL,
        method : API.LOGIN.METHOD,
        url: API.LOGIN.URI,
        data : {
            email : params.email,
            password : params.password,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function Register(params) {
    return Axios({
        baseURL : API.BASEURL,
        method : 'POST',
        url : API.REGISTER.URI,
        data : {
            email : params.email,
            password : params.password,
            fullname : params.fullname,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function Logout(token) {
    return Axios({
        baseURL : API.BASEURL,
        method : 'DELETE',
        url : API.LOGOUT.URI,
        headers   : {
            Authorization : "Bearer " + token
        }
       
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ForgotPassword(email){
    return Axios({
        baseURL : API.BASEURL,
        method : 'POST',
        url : API.FORGOT_PASSWORD.URI,
        data : {
            email : email,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ConfirmForgotPassword(params) {
    return Axios({
        baseURL : API.BASEURL,
        method : 'PUT',
        url : API.CONFIRM_FORGOT_PASSWORD.URI,
        data : {
            otp : params.otp,
            time : params.time,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ConfirmRegister(params) {
    return Axios({
        baseURL : API.BASEURL,
        method : 'PUT',
        url : API.CONFIRM_REGISTER.URI,
        data : {
            otp : params.otp,
            time : params.time,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}




export {Login,Register,Logout,ForgotPassword,ConfirmRegister,ConfirmForgotPassword}