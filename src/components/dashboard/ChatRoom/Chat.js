import React from 'react';
import {Card,Form,Media,Image} from 'react-bootstrap'
import {FontPoppins,CardCustomize,FontMontserrat} from '../../../styles/common/index'
import  MessageDemo from './message.json'
import MessageList from './MessageList';
import chatReducer,{defaultState} from './ChatReducer'
import {db} from '../../../services/FirebaseService'
export default ({roomName,roomID,own,fullname}) => {
  const height = window.innerHeight;
  const [state,dispatch] = React.useReducer(chatReducer,defaultState)
  const elScroll = React.useRef(null);
  const [key, setKey] = React.useState(null);
  const scrollToBottom = () => {
    elScroll.current.scrollTop = elScroll.current.scrollHeight;
    elScroll.current.scrollIntoView({ behavior: "smooth" })
  }
  React.useEffect(() => {
   scrollToBottom(); 
  })
  React.useEffect(() => {
    try{
      db.ref("chats").on("value",snapshot => {
        let chats = []
        let keys = []
        snapshot.forEach((snap) => {
          keys.push(snap.key)
          chats.push(snap.val())
        })
        dispatch({
          type : "GET_STORE",
          messages : chats 
        })
        setKey(keys)
      })
    }catch(e){
       console.log(e)
    }
  
  },[state.message])
  const typing = (e) => {
      dispatch({
        type : "SET_MESSAGE",
        message : {
          own : own,
          avatar : "https://www.flaticon.com/svg/static/icons/svg/3468/3468075.svg",
          message : [e.target.value],
          seenBy : [""],
          fullname : fullname
        
        }
      })
  }
//   const exportMessage = (data,obj) => {
   
//    if(data.length === 0){
//      data.push({
//        own: obj.own,
//        avatar : obj.avatar,
//        message : [obj.message],
//        seenBy : [""],
//      })
//      return data
//    }
//    if(data[data.length -1].own === obj.own){
//      data[data.length - 1].message.push(obj.message)
//      return data
//    }
//    else{
//      data.push({
//        own: obj.own,
//        avatar : obj.avatar,
//        message : [obj.message]
//      })
//      return data
//    }
//  }
  const sendMessage = async (event) => {
    event.preventDefault();
    if(state.message.message.length === 0) {
      return
    }
    try{
   
      if(state.messages.length === 0){
       await db.ref("chats").push({
          ...state.message
        })
        dispatch({
          type : "CLEAN_MESSAGE"
        })
      }
      else if(state.messages[state.messages.length -1].own === state.message.own){
        state.messages[state.messages.length -1].message.push(state.message.message)
       await db.ref("chats/" + key[key.length - 1]).update({
          message : state.messages[state.messages.length -1].message
        })
        dispatch({
          type : "CLEAN_MESSAGE"
        })
      }
      else{
        await db.ref("chats").push({
          ...state.message
        })
        dispatch({
          type : "CLEAN_MESSAGE"
        })
      }
      

   }
   catch(e){
     console.log(e)
   }
  
  }

  
//   const scrollToBottom = () =>  window.scrollTo({
  
//       top : document.documentElement.scrollHeight,
//       behavior:"smooth"   
// })

  return (
    <CardCustomize height={height}>
      <Card.Header className="card-header-customize">
          <Media>
              <Image 
                  className="avatar-32" 
                  src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
              roundedCircle  />
              <FontMontserrat size={15} className="font-weight-bold mt-1 mb-0 ml-1">Pea Boy</FontMontserrat>
          </Media>
      </Card.Header>
      <Card.Body className="card-body-customize" id="style-scroll" ref={elScroll}>
        <MessageList
          own = {own}
          fullname = {fullname}
          messages={state.messages}
        />
      </Card.Body>
      <Card.Footer className="card-footer-customize">
          <Form className="d-flex" onSubmit={(e) => sendMessage(e)}>
        
                  <Form.Control
                      className="form-control-customize"
                      type="text"
                      value = {state.message.message}
                      placeholder="typing message..."
                      onChange = {(e) => typing(e)}
                  />
                  <i 
                  onClick={() => scrollToBottom()}
                  className="ttt-pointer fas fa-location-arrow d-flex align-items-center">

                  </i>
          
          </Form>
      </Card.Footer>
    </CardCustomize>
);
}