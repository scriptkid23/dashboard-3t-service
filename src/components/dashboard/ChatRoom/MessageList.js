import React from 'react';
import Message  from './Message'
export default ({messages,own,fullname}) => {
    
    return(
        <React.Fragment>
            {messages.map((value, index) => {
                console.log(value)
                return(
                    <Message
                        key = {index}
                        avatar  = {value.avatar}
                        isOwn   = {own  === value.own ? true : false}
                        message = {value.message}
                        own     = {value.own}
                        fullname = {value.fullname}
                    />
                )
            })}
        </React.Fragment>
    )
}