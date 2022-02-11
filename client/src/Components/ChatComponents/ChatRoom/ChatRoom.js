import {useState,useEffect} from 'react';
import Input from '../Input/Input';
import './Chat.css';
import Messages from '../Messages/Messages';
import AllChats from '../AllChats/AllChats';







const ChatRoom = () => {
   
    return (
       <div className="h12"> 

    <h1 className="title">Chat Container</h1>
    
    <div className="outerContainer2">
        <AllChats/>
    <div className="container22">
  
         <Messages/>

  <div className="input2">
                 <Input  />
            </div>
        </div>
        
</div></div>
       
     );
    }
 
export default ChatRoom;