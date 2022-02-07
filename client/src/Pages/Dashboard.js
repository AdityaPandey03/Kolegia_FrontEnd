import Dcards from "../Components/Dashboard/DashboardCards";
import Profile from "../Components/Dashboard/Profile";
import "../Components/Dashboard/Dashboard.css";


const Dashboard = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="cont-dashboard">
        <Dcards />
        {/* <div className="flex">
          <Profile />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
