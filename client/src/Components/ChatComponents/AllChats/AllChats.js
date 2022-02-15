import jim from "../../../assests/jim.jpg";
import "./AllChats.css";
const AllChats = ({ chats }) => {
  console.log(chats);
  return (
    <div className="allchats_container">
      {chats.length > 0 ? (
        chats.map((item, index) => {
          return (
            <div key={index} className="single_chat_box">
              <img src={item.chatting_with.profile_picture} alt="profile-img" />
              <h5>{item.chatting_with.name}</h5>
              {/* <p>{item.last_message.message}</p> */}
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AllChats;
