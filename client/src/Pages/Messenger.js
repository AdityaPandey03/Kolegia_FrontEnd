import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import "../Components/Messenger/Messenger.css";
import Conversations from "../Components/Conversations/Conversations";
import {
  getAllChats,
  getMessages,
  getNextBacthOfMessages,
  sendMessage,
} from "../redux/actions/chatActions";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message/Message";
import { io } from "socket.io-client";
import { ConstructionOutlined } from "@mui/icons-material";
import CircularProgress from "@mui/material/CircularProgress";

function Messenger() {
  const chats = useSelector((state) => state.chat.chats);
  const currentChatMessages = useSelector(
    (state) => state.chat.all_messages_of_a_conversation
  );
  const nextBatch = useSelector(
    (state) => state.chat.next_batch_of_a_conversation
  );
  const new_message = useSelector((state) => state.chat.new_message);
  const isLoading = useSelector((state) => state.chat.isLoading);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messagesToShow, setMessagesToShow] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState(null);
  const dispatch = useDispatch();
  const encodedToken = localStorage.getItem("jwt");
  const decoded = jwt_decode(encodedToken);
  const user_details = {
    _id: decoded._id,
  };
  const token = decoded.auth_token;

  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    dispatch(getAllChats({ user_details, token }));
  }, []);

  useEffect(() => {
    const room_id = currentChat?._id;
    dispatch(getMessages({ room_id, token }));
  }, [currentChat]);

  useEffect(() => {
    // console.log(currentChatMessages.reverse());
    setMessages(currentChatMessages);
  }, [currentChatMessages]);

  useEffect(() => {
    nextBatch.length > 0 && setMessages((prev) => [...nextBatch, ...prev]);
  }, [nextBatch]);

  useEffect(() => {
    new_message && setMessages((prev) => [...prev, new_message]);
  }, [new_message]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const clickHandler = (e) => {
    e.preventDefault();

    socket.current.emit("sendMessage", {
      senderId: user_details._id,
      text: newMessage,
      receiverId: currentChat?.chatting_with?._id,
    });

    const formdata = new FormData();
    formdata.append("message", newMessage);
    formdata.append("user_details", user_details);
    formdata.append("room_id", currentChat._id);
    formdata.append("token", token);

    dispatch(sendMessage(formdata));
    setNewMessage("");
  };

  //SOCKET FUNCTIONS

  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.on("getMessage", (data) => {
      setReceivedMessage({
        sender_id: data.senderId,
        receiver_id: data.receiverId,
        room_id: currentChat?._id,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    socket.current?.emit("addUser", user_details._id);
    // socket.current.on("getUser", (users) => {
    //   setOnlineUsers(
    //     user.following.filter((f) => users.some((u) => u.userId == f))
    //   );
    // });
  }, [user_details]);

  useEffect(() => {
    receivedMessage && setMessages((prev) => [...prev, receivedMessage]);
    console.log(messages);
  }, [receivedMessage]);

  const handleScroll = (e) => {
    let element = e.target;
    if (element.scrollTop === 0) {
      const room_id = currentChat?._id;
      dispatch(
        getNextBacthOfMessages({ room_id, token, skip: messages.length })
      );
    }
  };

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="search for friends" />
            {chats.length > 0 ? (
              chats.map((c) => {
                return (
                  <div onClick={(e) => setCurrentChat(c)}>
                    <Conversations conversation={c} />
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop" onScroll={handleScroll}>
                  {isLoading && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </div>
                  )}
                  {messages.length > 0 &&
                    messages.map((m) => {
                      return (
                        <div>
                          <Message
                            message={m}
                            own={m.sender_id === user_details._id}
                          />
                        </div>
                      );
                    })}
                </div>

                <div className="chatBoxBottom">
                  <form
                    onSubmit={clickHandler}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <textarea
                      className="chatInput"
                      placeholder="write Something"
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button className="chatSubmitButton" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <span className="noConversationText">Start a conversation</span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          {/* <div className="chatOnlineWrapper"> */}
          {/* <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Messenger;
