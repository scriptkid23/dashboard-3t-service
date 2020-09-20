import React from 'react';
import {Slide} from 'react-reveal'
export default function Sidebar(){
    return(  
        <Slide left>
            <nav id="sidebar" className="p-0 d-flex justify-content-center align-items-center">
             <ul className="sidebar-ul-customize">
                
                    <li className="ttt-pointer"><i class="lni lni-home"></i></li>
                    <li className="ttt-pointer"><i class="lni lni-direction-alt"></i></li>
                    <li className="ttt-pointer"><i class="lni lni-bookmark"></i></li>
                    <li className="ttt-pointer"><i class="lni lni-cog"></i></li>
                
                 
                
             </ul>
            </nav>
        </Slide>
       
            
    )
}