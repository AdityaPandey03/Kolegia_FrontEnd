


import "../Components/Requirement/requirement.css";
import Req_feed from '../Components/Requirement/Req_feed';
import { useDispatch, useSelector } from "react-redux";
import {getAllOwnRequirements} from '../redux/actions/RequirementActions'
import { FaEdit} from "react-icons/fa";
import { useState, useEffect } from "react";

const My_requirements = () => {
    const itemList = useSelector((state) => state.requirement.ownItems);
    // const status=useSelector((state=>state.requirement.addrequirementresponse))
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOwnRequirements());
        
      }, []);
      
      console.log(itemList);

//        if(status===200){
//         window.location.reload(false);
//   }
      
  
    
    return (
    
  <div className='requirement_page'>
      <div className='page_heading'>
          <h3>Requirement</h3>
          
      </div>
      <div className='page_content'>
      {itemList.map((item,index)=>{
          return(
             <Req_feed key={index} postedBy={"You"} data = {item} />
          )
      })}
      
     
      </div>
   
     
     
      
    
    
  </div>
    );
};

export default My_requirements;
