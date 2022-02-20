import axios from "axios";
import React from "react";
import "./Conversations.css";

function Conversations({ conversation }) {
  return (
    <div className="conversation">
      <img
        src={conversation.chatting_with.profile_picture}
        className="conversationImage"
      />
      <span className="conversationName">
        {conversation.chatting_with.name}
      </span>
    </div>
  );
}

export default Conversations;
