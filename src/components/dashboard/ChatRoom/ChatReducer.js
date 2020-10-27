export const defaultState = {
    messages : [],
    isTyping : false,
    message : {
        // own : localStorage.getItem("email"),
        message : "",
        avatar : "",
        seenBy : [""],
    },
 };
 
 export default function chatReducer(state,action){
     switch (action.type) {   
         case 'GET_STORE':
             return{
                 ...state,
                 messages : action.messages,
             }
         case 'SET_MESSAGE':
             return{
                 ...state,
                 isTyping : true,
                 message : action.message,
             }
         case 'SEND_MESSAGE':
             return{
                 ...state,
                 isTyping : false,
                 messages : state.messages,
                 message : {
                     own : "",
                     message : "",
                     avatar : "",
                 },

             }
        case 'CLEAN_MESSAGE':
            return{
                ...state,
                message : {
                    own : "",
                    message : "",
                    avatar : "",
                    seenBy : [""],
                },
            }
         default:
             break;
     }
 }