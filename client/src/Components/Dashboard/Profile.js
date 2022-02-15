import Pic from '../../assests/jim.jpg';
import './Profile.css'
import jwt_decode from "jwt-decode";


const Profile = () => {

    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    console.log(decoded)

    return ( 
        <div className="profile-section">
        <div  className="profile-card">
            <div className='main-content'>
            <div className="profile-img">
                <img src={decoded.profile_picture} alt="aa"  />
            </div>
            <h1 style={{fontSize:'25px',color:'#332A7C',margin:'11px'}}>{decoded.name}</h1>
            <h4 style={{color:'#000000',margin:'-6px'}}>{decoded.email}</h4>
            </div>
            {/* <div className='other-content'>
                <h1>other-content</h1>
                <p>Eaque expedita fugit dolorum dolore officiis?  quas mollitia. Quasi tenetur, explicabo nisi quidem excepturi laborum fuga eius, corporis sequi placeat, quos et!</p>
            </div> */}
            
            
        </div>
        {/* <MyRequirements/> */}
        </div>
     );
}
 
export default Profile;