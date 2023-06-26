import React from 'react';
import { Message, useMessageContext } from 'stream-chat-react';


const TeamMessage = () => {
  const { handleOpenThread, message } = useMessageContext();

  return (
    <div>
      <Message
        message={{ ...message, user: {}}}
        // handleOpenThread={}
        />
    </div>
  )
}

export default TeamMessage
