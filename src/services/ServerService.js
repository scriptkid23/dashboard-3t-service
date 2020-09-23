import Axios from 'axios';
import API from './api'
function Login(params) {
    console.log(params)
    return Axios({
        baseUrl: 'http://localhost:5000',
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
        baseUrl : API.BASEURL,
        method : 'POST',
        url : API.REGISTER.URI,
        data : {
            email : params.payload.data.email,
            password : params.payload.data.password,
            username : params.payload.data.username,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function Logout() {
    return Axios({
        baseUrl : API.BASEURL,
        method : 'DELETE',
        url : API.LOGOUT.URI,
       
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ForgotPassword(params){
    return Axios({
        baseUrl : API.BASEURL,
        method : 'POST',
        url : API.FORGOT_PASSWORD.URI,
        data : {
            email : params.payload.data.email,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ConfirmForgotPassword(params) {
    return Axios({
        baseUrl : API.BASEURL,
        method : 'POST',
        url : API.CONFIRM_FORGOT_PASSWORD.URI,
        data : {
            otp : params.payload.data.otp,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}

function ConfirmRegister(params) {
    return Axios({
        baseUrl : API.BASEURL,
        method : 'POST',
        url : API.CONFIRM_REGISTER.URI,
        data : {
            otp : params.payload.data.otp,
        }
    }).then(result => {return result})
    .catch(error => {return error.response})
}




export {Login,Register,Logout,ForgotPassword,ConfirmRegister,ConfirmForgotPassword}