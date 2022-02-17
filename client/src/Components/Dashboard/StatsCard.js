import { useEffect } from "react";
import { getDashBoardStats } from "../../redux/actions/authActions";
import { useDispatch,useSelector } from "react-redux";

import "./DashboardCards.css";

const StatsCard = () => {

    const dispatch=useDispatch();
    const stats=useSelector((state)=> state.auth.dashboardStats);

console.log(stats);

    useEffect(()=>{
dispatch(getDashBoardStats())
    },[]);

    return ( 
        <div className='statsCard' id="Dcard" >
              <h2>Stats</h2>
              <h4>Total-users:{stats.users_count}</h4>
              <h4>Lost-Items:{stats.lost_items}</h4>
              <h4>Unread-msgs:{stats.unread_messages_count}</h4>
              <h4>Raise-hands:{stats.raised_hands_count}</h4>
              
             
            </div>
     );
}
 
export default StatsCard;