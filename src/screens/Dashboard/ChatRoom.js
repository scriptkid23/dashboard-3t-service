import React from 'react';
import {Card,Row,Col,Form,Media,Image} from 'react-bootstrap'
import {FontPoppins,CardCustomize,FontMontserrat} from '../../styles/common/index'
import {Chat,ChatList} from '../../components/dashboard/ChatRoom/index'
import {useSelector,useDispatch} from 'react-redux'
import Backdrop from '../../components/common/Backdrop'
import * as authReducer from '../../redux/reducers/auth.reducer'

export default function ChatRoom(){
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions}
    const authStore  = useSelector(state => state.auth)

    React.useEffect(() => {
        dispatch(authAction.getUserDetail.requested());
        },[])
    return(
        <div >
            {authStore.loading && <Backdrop show={authStore.loading}/>}
            {authStore.user_detail.email  &&
            <>
            <FontPoppins size={30} className="font-weight-bold">Chat Room</FontPoppins>
            <Row>
                <Col xs={9}>
                    <Chat 
                      roomName = ""
                      roomID = ""
                      own = {authStore.user_detail.email}
                      fullname = {authStore.user_detail.fullname}
                    />
                </Col>
                <Col>
                    <ChatList/>
                </Col>
            
            </Row>
            </>
            }
            
           
        </div>
    )
}