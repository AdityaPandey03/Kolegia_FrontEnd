import Pic from '../../assests/Pic.jpeg';
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
            <h1>JIM HELPERT</h1>
            <h4>@jim123</h4>
            </div>
            <div className='other-content'>
                <h1>other-content</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia magni distinctio labore, eius nostrum molestiae facere maxime, deserunt eaque expedita fugit dolorum dolore officiis? Aut odit cumque ad obcaecati sint autem maxime nulla quas mollitia. Quasi tenetur, explicabo nisi quidem excepturi laborum fuga eius, corporis sequi placeat, quos et!</p>
            </div>
            
            
        </div>
        {/* <MyRequirements/> */}
        </div>
     );
}
 
export default Profile;