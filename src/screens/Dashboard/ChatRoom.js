import React from 'react';
import {Card,Row,Col,Form,Media,Image} from 'react-bootstrap'
import {FontPoppins,CardCustomize,FontMontserrat} from '../../styles/common/index'

export default function ChatRoom(){
    const  height = window.innerHeight;

    return(
        <div >
            <FontPoppins size={30} className="font-weight-bold">Chat Room</FontPoppins>
            <Row>
                <Col xs={9}>
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
                            <Card.Body className="card-body-customize" id="style-2">
                            <Media>
                                <Image 
                                    className="avatar-32" 
                                    src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                                roundedCircle  />
                                <Media.Body className="media-body-customize">
                                    <FontMontserrat className="m-0 p-2">
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                    Donec lacinia congue felis in faucibus.
                                    </FontMontserrat>
                                </Media.Body>
                            </Media>
                            <Media className="d-flex justify-content-end">
                                <Media.Body className="media-body-customize">
                                        <FontMontserrat className="m-0 p-2">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                        </FontMontserrat>
                                        
                                </Media.Body>
                            
                                <Image 
                                    className="avatar-32" 
                                        src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                                    roundedCircle  />
                            </Media>
                            <Media className="d-flex justify-content-end">
                                <Media.Body className="media-body-customize">
                                        <FontMontserrat className="m-0 p-2">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                        </FontMontserrat>
                                        
                                </Media.Body>
                            
                                <Image 
                                    className="avatar-32" 
                                        src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                                    roundedCircle  />
                            </Media>
                            <Media className="d-flex justify-content-end">
                                <Media.Body className="media-body-customize">
                                        <FontMontserrat className="m-0 p-2">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                        Donec lacinia congue felis in faucibus.
                                        </FontMontserrat>
                                        
                                </Media.Body>
                            
                                <Image 
                                    className="avatar-32" 
                                        src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                                    roundedCircle  />
                            </Media>
                            </Card.Body>
                            <Card.Footer className="card-footer-customize">
                                <Form className="d-flex">
                               
                                        <Form.Control
                                            className="form-control-customize"
                                            type="text"
                                            placeholder="typing message..."
                                        />
                                        <i class="ttt-pointer fas fa-location-arrow d-flex align-items-center"></i>
                                
                                </Form>
                            </Card.Footer>
                    </CardCustomize>
                    
                  
                   
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