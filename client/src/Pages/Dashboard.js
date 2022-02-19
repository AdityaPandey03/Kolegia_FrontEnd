import Dcards from "../Components/Dashboard/DashboardCards";
import Profile from "../Components/Dashboard/Profile";
import "../Components/Dashboard/DashboardCards.css";
import Navbar from "../Components/Appbar/Navbar";
import StatsCard from "../Components/Dashboard/StatsCard";



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
