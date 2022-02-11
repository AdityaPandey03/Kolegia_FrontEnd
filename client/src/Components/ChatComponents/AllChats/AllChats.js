import jim from '../../../assests/jim.jpg'
import './AllChats.css'
const AllChats = () => {
    return (  

        <div className="allchats_container">
            <div className="single_chat_box">
                <img src={jim} alt="profile-img" />
                <p>Hey,I am good...</p>
            </div>

        </div>
    );
}
 
export default AllChats;