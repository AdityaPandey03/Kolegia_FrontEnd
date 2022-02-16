import React from "react";
import "./message.css";

function Message({ message, own }) {
  // console.log(message);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message?.message}</p>
      </div>
      {/* <div className="messageBottom">{format(message.createdAt)}</div> */}
    </div>
  );
}

export default Message;
