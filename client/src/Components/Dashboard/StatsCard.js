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
        <div className="DcardStats" id='statsCard'>
              <h2 style={{textAlign:'center',color:'PURPLE'}}>Statistics</h2>
              <h4 style={{marginTop:'35px',marginLeft:'20px', fontFamily: "Hind Siliguri, sans-serif",fontSize:'19px',fontWeight:'900'}}>Total Users:  {stats.users_count}</h4>
              <h4 style={{marginTop:'13px',marginLeft:'20px', fontFamily: "Hind Siliguri, sans-serif",fontSize:'19px'}}>Lost Items:    {stats.lost_items}</h4>
              <h4 style={{marginTop:'13px',marginLeft:'20px',fontFamily: "Hind Siliguri, sans-serif",fontSize:'19px'}}>Unread-msgs:   {stats.unread_messages_count}</h4>
              <h4 style={{marginTop:'13px',marginLeft:'20px', fontFamily: "Hind Siliguri, sans-serif",fontSize:'19px'}}>Raised Hands:   {stats.raised_hands_count}</h4>
              
             
            </div>

        //  {/* <div className='statsCard' id="DcardStats" >
        //       <h2 style={{textAlign:'center'}}>Stats</h2>
        //       <h4 style={{marginTop:'35px',marginLeft:'20px', fontFamily: "Inter, sans-serif",fontSize:'18px',fontWeight:'900'}}>Total Users:  {stats.users_count}</h4>
        //       <h4 style={{marginTop:'15px',marginLeft:'20px', fontFamily: "Inter, sans-serif",fontSize:'18px'}}>Lost Items:    {stats.lost_items}</h4>
        //       <h4 style={{marginTop:'15px',marginLeft:'20px',fontFamily: "Inter, sans-serif",fontSize:'18px'}}>Unread-msgs:   {stats.unread_messages_count}</h4>
        //       <h4 style={{marginTop:'15px',marginLeft:'20px', fontFamily: "Inter, sans-serif",fontSize:'18px'}}>Raised Hands:   {stats.raised_hands_count}</h4>
              
             
        //     </div> */}
     );
}
 
export default StatsCard;