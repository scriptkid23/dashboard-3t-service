import React from 'react';
import Message  from './Message'
export default ({messages,own}) => {
    
    return(
        <React.Fragment>
            {messages.map((value, index) => {
                return(
                    <Message
                        avatar  = {value.avatar}
                        isOwn   = {own  === value.own ? true : false}
                        message = {value.message}
                        own     = {value.own}
                    />
                )
            })}
        </React.Fragment>
    )
}