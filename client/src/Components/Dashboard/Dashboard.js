import Dcards from "./DCards/Dcards";
import Profile from "./Profile/Profile";
import './Dashboard.css'
import Navbar from "../Appbar/Navbar";

const Dashboard = () => {
    return ( 
        <>
        {/* <Navbar/> */}
        <div className="cont-dashboard">
        
            <Dcards />
            <div className="flex"> 
            <Profile/>
            </div>
           
        </div>
        </>
     );
}
 
export default Dashboard;