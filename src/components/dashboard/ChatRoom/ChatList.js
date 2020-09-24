import React from 'react';
import {Card,Media,Image} from 'react-bootstrap';
import {FontPoppins,FontMontserrat} from '../../../styles/common/index';
import {shortString} from '../../../services/extensions'
export default () => {
    return (
        <Card className="card-customize">
            <Card.Header className="card-header-customize">
               <span className="font-weight-bold">Conversations</span>
            </Card.Header>
            <Card.Body className="chat-list-card-body-customize" id="style-scroll">
                <ul className="chat-list-ul-customize">
                    <li className="ttt-pointer">
                        <Media>
                            <Image 
                            className="avatar-32" 
                            src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                            roundedCircle  />
                            <Media.Body  className="ml-2">
                                <FontPoppins className="p-0 m-0 font-weight-bold">Petter</FontPoppins>
                                <FontPoppins className="p-0 m-0">{shortString("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",38)}</FontPoppins>   
                            </Media.Body>
                        </Media>
                    </li>
                   
                   
                </ul>
            </Card.Body>
        </Card>
    )
}