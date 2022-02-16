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

<div className="header1">
    <h1>Kolegia</h1>
    <Link className="nav-profile" to='/sideBar'>Profile</Link>
   
</div>

<input type="checkbox" id="check"/>
      <label htmlFor="check" className="checkbtn">
        <i style={{color:'white'}}className="fas fa-bars"></i>
      </label>
    <ul>
        {visibleSearch?
        <li> <form className="form"
                id="form">
                    
          <input  type="text" placeholder='Search...' id="search" className="search" />
          <div className="icon"><FaSearch/></div>
                </form></li>:null}
                <div className="a">
        {/* <li><a href="">Items-needed</a></li> */}
        <li><a href="#"><FaBell/></a></li>
        <li><Link to='/chatRoom'><SiGooglechat/></Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li on onClick={handleClick} style={{fontSize:'1.2rem'}}>Logout</li>
        </div>
        
    </ul>
        </div>
    );
}
 
export default Navbar;