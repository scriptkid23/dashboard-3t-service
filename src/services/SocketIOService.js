import io from 'socket.io-client';
import CookieService from './CookieService'
function initSocket(){
    const socket = io('http://localhost:5000/test',{
        transportOptions: {
            polling: {
            extraHeaders: {
                authorization : `Bearer ${CookieService.get('token')}`,
            },
            },
        }});
    return socket;
}
module.exports = {
	COMMUNITY_CHAT:"COMMUNITY_CHAT",
	USER_CONNECTED:"USER_CONNECTED",
	MESSAGE_RECIEVED:"MESSAGE_RECIEVED",
	MESSAGE_SENT:"MESSAGE_SENT",
	USER_DISCONNECTED:"USER_DISCONNECTED",
	TYPING:"TYPING",
	VERIFY_USER:"VERIFY_USER",
	LOGOUT:"LOGOUT"
}