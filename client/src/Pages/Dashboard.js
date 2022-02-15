import Dcards from "../Components/Dashboard/DashboardCards";
import Profile from "../Components/Dashboard/Profile";
import "../Components/Dashboard/Dashboard.css";
import Navbar from "../Components/Appbar/Navbar";



const Dashboard = () => {
  return (
    <>
      <Navbar visibleSearch={false}/>
      <div className="cont-dashboard">
        <Dcards />
      
      </div>
    </>
  );
};

export default Dashboard;
