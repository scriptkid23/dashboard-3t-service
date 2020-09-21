import React from 'react';
import {Card,Row,Col,Form,Media,Image} from 'react-bootstrap'
import {FontPoppins,CardCustomize,FontMontserrat} from '../../styles/common/index'
import Chat from '../../components/dashboard/ChatRoom/index'
export default function ChatRoom(){

    return(
        <div >
            <FontPoppins size={30} className="font-weight-bold">Chat Room</FontPoppins>
            <Row>
                <Col xs={9}>
                   
                    <Chat messages={[
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "3",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "3",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      
    ]}/>
                  
                   
                </Col>
                <Col>
                    <Card className="card-customize">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            
            </Row>
           
        </div>
    )
}