import { FaBell,FaBars,FaSearch } from "react-icons/fa";
import { SiGooglechat } from "react-icons/si";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch,useSelector } from "react-redux";
import { logoutUser} from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";





import './Navbar.css'
const Navbar = ({visibleSearch}) => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const logoutUserRes=useSelector((state)=>state.auth.logoutUserResponse);
    // const token = localStorage.getItem("jwt");

   


const handleClick =  ()=> {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
   const logout= dispatch(logoutUser(decoded.auth_token));

  
   navigate('/')


}
    return (  
        <div className="container-nav">
            <div className="part_one">
                <div className="header1">
                    <img src="https://res.cloudinary.com/kartikeyvaish/image/upload/v1642841457/Kolegia/logo_snpqqs.png" alt="" />
                    <p id='abc'>olegia</p>
                </div>
            </div>
            <div className="a">
                <Link className="nav-profile" to='/sideBar'>Profile</Link> 
                <input type="checkbox" id="check"/>
                <label htmlFor="check" className="checkbtn">
                    <i style={{color:'white'}}className="fas fa-bars"></i>
                </label>
                <div className='ul'>
                    {visibleSearch?
                    <p><form className="form" id="form">                            
                    <input  type="text" placeholder='Search...' id="search" className="search" />
                    <div className="icon"><FaSearch/></div>
                    </form></p>:null
                    }
                </div>            
                {/* <li><a href="">Items-needed</a></li> */}
                <p><Link to='/chatRoom'><SiGooglechat/></Link></p>
                <p><Link to='/dashboard'>Dashboard</Link></p>
                <p className="log_out" on onClick={handleClick}>Logout</p>
            </div>        
        </div>
    );
}
 
export default Navbar;