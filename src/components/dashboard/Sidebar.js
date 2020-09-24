import React from 'react';
import {Slide} from 'react-reveal'
import {NavLink, useLocation} from 'react-router-dom'
export default function Sidebar(){
    const location = useLocation();
    const listPathName = {
        fromHome : false,
        fromChatRoom : false,
        fromBookmarks : false,
        fromSetting : false,
    }
    return(  
        <Slide left>
            <nav id="sidebar" className="p-0 d-flex justify-content-center align-items-center">
             <ul className="sidebar-ul-customize">
                    <NavLink activeClassName="active" className="link-customize" to={{
                        pathname : "/dashboard/home",
                    }}>
                        <li className={`ttt-pointer`}>
                            <i className="lni lni-home"></i>
                        </li>
                    </NavLink>
                    <NavLink className="link-customize" to={{
                        pathname : "/dashboard/chat-room",
                       
                    }}>
                        <li className={`ttt-pointer`}>
                            <i className="lni lni-direction-alt"></i>
                        </li>
                    </NavLink>
                    <NavLink className="link-customize" to={{
                        pathname : "/dashboard/bookmarks",
                       
                    }}>
                        <li className={`ttt-pointer`}>
                            <i className="lni lni-bookmark"></i>
                        </li>
                    </NavLink>
                    <NavLink className="link-customize" to={{
                        pathname : "/dashboard/setting",
                      
                    }}>
                        <li className={`ttt-pointer`}>
                            <i className="lni lni-cog"></i>
                        </li>
                    </NavLink>
                    <NavLink  className="link-customize" to={{
                        pathname : "/auth/login",   
                    }}>
                        <li className={`ttt-pointer pl-2`}>
                            <i class="lni lni-enter"></i>
                        </li>
                    </NavLink>
             </ul>
            </nav>
        </Slide>
       
            
    )
}