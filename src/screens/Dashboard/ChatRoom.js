import React from 'react';
import {Card,Row,Col,Form,Media,Image} from 'react-bootstrap'
import {FontPoppins,CardCustomize,FontMontserrat} from '../../styles/common/index'
import {Chat,ChatList} from '../../components/dashboard/ChatRoom/index'
export default function ChatRoom(){

    return(
        <div >
            <FontPoppins size={30} className="font-weight-bold">Chat Room</FontPoppins>
            <Row>
                <Col xs={9}>
                    <Chat 
                      roomName = ""
                      roomID = ""
                      own = {localStorage.getItem("email")}
                    />
                </Col>
                <Col>
                    <ChatList/>
                </Col>
            
            </Row>
           
        </div>
    )
}