import { FaBell,FaBars,FaSearch } from "react-icons/fa";
import { SiGooglechat } from "react-icons/si";
import { Link } from "react-router-dom";



import './Navbar.css'
const Navbar = () => {
    return (  
        <div className="container-nav">

<div className="header">
    <h1>Kolegia</h1>
    <div className="nav-profile" >P</div>
</div>

<input type="checkbox" id="check"/>
      <label for="check" class="checkbtn">
        <i style={{color:'white'}}class="fas fa-bars"><FaBars/></i>
      </label>
    <ul>
        <li> <form className="form"
                id="form">
                    
          <input  type="text" placeholder='Search...' id="search" className="search" />
          <div className="icon"><FaSearch/></div>
                </form></li>
                <div className="a">
        {/* <li><a href="">Items-needed</a></li> */}
        <li><a href=""></a><FaBell/></li>
        <li><a href=""></a><SiGooglechat/></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        </div>
        
    </ul>
        </div>
    );
}
 
export default Navbar;