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
                src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg" 
            roundedCircle  />
        </Media>
        
        </nav>
    )
}