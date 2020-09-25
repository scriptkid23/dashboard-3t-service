import React from 'react';
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import * as authReducer from '../../redux/reducers/auth.reducer'
export default function Sidebar(){
    const history = useHistory();
    const dispatch = useDispatch();
    const authAction = {...authReducer.actions};

    const handleLogout = () => {
        dispatch(authAction.logout.requested({callback:history}));
    }

   
    return(  
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
                        <li 
                            onClick={() => handleLogout()}
                            className={`ttt-pointer pl-2`}>
                            <i className="lni lni-enter"></i>
                        </li>
                    </NavLink>
             </ul>
            </nav>            
    )
}