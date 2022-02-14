import Pic from '../assests/Pic.jpeg';
import '../Components/Dashboard/ProfileMobile.css'
import jwt_decode from "jwt-decode";

const ProfileMobile= () => {

    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

    console.log(decoded)
    //decoded==data

    return ( 
        <div className="profile_mobile2">
             <div className="profile-card2">
            <div className='main-content2'>
            <div className="profile-img2">
                <img src={Pic} alt="aa"  />
            </div>
            <h1>{decoded.name}</h1>
            <h4 >{decoded.email}</h4>
            <h4>{}</h4>
            </div>
            <div className='other-content2'>
                <h1>other-content</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia magni distinctio labore, eius nostrum molestiae facere maxime, deserunt eaque expedita fugit dolorum dolore officiis? Aut odit cumque ad obcaecati sint autem maxime nulla quas mollitia. Quasi tenetur, explicabo nisi quidem excepturi laborum fuga eius, corporis sequi placeat, quos et!</p>
            </div>
            
            
        </div>
        </div>
       
     );
}
 
export default ProfileMobile;