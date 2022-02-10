import Pic from '../../assests/jim.jpg';
import './Profile.css'
import MyRequirements from './MyRequirements';
const Profile = () => {
    return ( 
        <div className="profile-section">
        <div  className="profile-card">
            <div className='main-content'>
            <div className="profile-img">
                <img src={Pic} alt="aa"  />
            </div>
            <h1>JIM HALPERT</h1>
            {/* <h4>@jim123</h4> */}
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