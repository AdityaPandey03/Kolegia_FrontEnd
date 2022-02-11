import {useState,useEffect} from 'react';
import Input from '../Input/Input';
import './Chat.css';
import Messages from '../Messages/Messages';
import AllChats from '../AllChats/AllChats';







const ChatRoom = () => {
   
    return (
       <div className="h1"> 

    <h1 className="title">Chat Container</h1>
    
    <div className="outerContainer">
        <AllChats/>
    <div className="container">
  
         <Messages/>

  <div className="input">
                 <Input  />
            </div>
        </div>
        
</div></div>
       
     );
    }
 
export default ChatRoom;