import React from 'react'
import {Media,Image} from 'react-bootstrap'
import {FontMontserrat} from '../../../styles/common/index'
export default ({avatar,message,isOwn}) => {
    return(
        isOwn ? 
            <div>
                {message.map((value,index)=>{
                    return(
                        <Media key = {index} className="d-flex justify-content-end">
                            <Media.Body className="media-body-customize is-user">
                                    <FontMontserrat className="m-0 p-2" color={"#fefefe"}>
                                        {value}
                                    </FontMontserrat>
                                        
                            </Media.Body>
                            {index === 0 ? 
                            <Image className="avatar-32" src={avatar} roundedCircle/>:
                            <Image className="avatar-32" roundedCircle/>
                        
                        }
                            
                        </Media>
                    )
                })}
            </div> 
        : 
        <div>
            {message.map((value,index) => {
                return(
                    <Media>
                        {index === 0 ? 
                        <Image className="avatar-32" src={avatar} roundedCircle/>  
                        :  
                        <Image className="avatar-32"roundedCircle/> }
                        <Media.Body  className="media-body-customize is-other">
                            <FontMontserrat className="m-0 p-2">
                                {value}
                            </FontMontserrat>   
                        </Media.Body>    
                    </Media>
                )
            })}
        </div>
        
    )
}