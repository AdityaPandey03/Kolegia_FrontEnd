import React, { useState } from 'react';
import { FaBell,FaBars,FaSearch } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { SiGooglechat } from "react-icons/si";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch,useSelector } from "react-redux";
import { logoutUser} from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";





import './Navbar.css'
const Navbar = ({visibleSearch}) => {

    const [toggleMenu, setToggleMenu] = useState(false);

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
            <div className='ul'>
                    {visibleSearch?
                    <p><form className="form" id="form">                            
                    <input  type="text" placeholder='Search...' id="search" className="search" />
                    <div className="icon"><FaSearch/></div>
                    </form></p>:null
                    }
                </div>
            <div className="a">            
                <p><Link to='/chatRoom'><SiGooglechat/></Link></p>
                <p><Link to='/dashboard'>Dashboard</Link></p>
                <p className="log_out" on onClick={handleClick}>Logout</p>
            </div>   
            <div className="nav_mobile">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="nav_mobile_menu scale-up-center">
                <div className="nav_mobile_menu_part">
                    <p><Link to='/chatRoom'><SiGooglechat/></Link></p>
                    <p><Link className="nav-profile" to='/sideBar'>Profile</Link></p>
                    <p><Link to='/dashboard'>Dashboard</Link></p>                    
                </div>
                <div className="nav_mobile_menu_sign">
                    <p className="log_out_menu" on onClick={handleClick}>LogOut</p>
                </div>
                </div>
                )}
            </div>         
        </div>
    );
}
 
export default Navbar;