import React from 'react';
import {Image,Media,Dropdown} from 'react-bootstrap'
import {FontPoppins} from '../../styles/common/index'
import {shortString} from '../../services/extensions'
export default function Navbar(){
    const [notification, showNotification] = React.useState(false);
    return(   
    <nav className="navbar sticky-top d-flex justify-content-end">
      
        <div onClick={() => showNotification(true)} className="mr-3 ttt-pointer navbar-badge">
            <i className="fas fa-bell customize-badge" >
            <span className="badge">12</span>
            </i>
        </div>
        <div >
            <Media className="ttt-pointer">
                <Image 
                    className="avatar-32" 
                    src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
                roundedCircle  />
            </Media>
        </div>
        <div id="alert-sidebar" className={`${notification ? 'active' : ''}`}>
            <div 
                onClick={() => showNotification(false)}
                className="d-flex justify-content-between p-3">
                <FontPoppins size={19} className="font-weight-bold" >Notifications</FontPoppins>
                <i className="mt-1 ttt-pointer fas fa-times"></i>
            </div>
            <div>
                <ul className="alert-sidebar-content chat-list-ul-customize" id="style-scroll">
                    <li className="ttt-pointer">
                        <Media className="p-3">
                            <Image 
                            className="avatar-32" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1156/1156949.svg" 
                            roundedCircle  />
                            <Media.Body  className="ml-2">
                                <FontPoppins className="p-0 m-0 font-weight-bold">Petter</FontPoppins>
                                <FontPoppins className="p-0 m-0">
                                 {shortString("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",30)}
                                </FontPoppins>
                            </Media.Body>
                        </Media>
                    </li>
                    
                </ul>
                
            </div>
        </div>
       
    </nav>
    )
}