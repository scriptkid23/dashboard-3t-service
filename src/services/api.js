const API = {
    BASEURL: "http://localhost:5000",

    // ========= auth layout ===================== // 
    LOGIN:{
        URI    : "api/login",
        METHOD : "POST",
    },
    REGISTER:{
        URI    : "api/signup",
        METHOD : "POST",
    },
    LOGOUT: {
        URI    : "api/logout",
        METHOD : "DELETE",
    },
    FORGOT_PASSWORD: {
        URI    : "api/forgot-password",
        METHOD : "POST",
    },
    CONFIRM_REGISTER: {
        URI    : "api/signup",
        METHOD : "PUT",
    },
    CONFIRM_FORGOT_PASSWORD: {
        URI    : "api/forgot-password",
        METHOD : "PUT",
    }



}
export default API;