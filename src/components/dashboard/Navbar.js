import React from 'react';
import {Image,Media} from 'react-bootstrap'
import {FontPoppins} from '../../styles/common/index'
export default function Navbar(){
    return(   
        <nav className="navbar sticky-top d-flex justify-content-end">
        <div className="mr-3 ttt-pointer navbar-badge">
            <i className="fas fa-bell customize-badge" >
            <span class="badge">12</span>
            </i>
        </div>
        
        <Media className="ttt-pointer">
            <Image 
                className="avatar-32" 
                src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/100657068_2510581839254510_6956254900913176576_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=4XED3SE9MGgAX__ZVf0&_nc_oc=AQnEWchAxmrQ5FgnIJzeW6X4ZmKrobDpAbRfoEEYbApclW5F-7aIRcteDF-GjReb-kU&_nc_ht=scontent.fhan2-6.fna&oh=f1ce86d15d34693c4c2cbaf130edd633&oe=5F8EFEC1" 
            roundedCircle  />
        </Media>
        
        </nav>
    )
}