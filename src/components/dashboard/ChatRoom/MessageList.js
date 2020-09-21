import React from 'react';
import Message  from './Message'
export default ({messages}) => {
    const own = "John";
    return(
        <React.Fragment>
            {messages.map((value, index) => {
                return(
                    <Message
                        avatar  = {value.avatar}
                        isOwn   = {own  === value.own ? true : false}
                        message = {value.message}
                    />
                )
            })}
        </React.Fragment>
    )
}