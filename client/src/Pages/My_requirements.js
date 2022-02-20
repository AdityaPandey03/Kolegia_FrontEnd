import jwt_decode from "jwt-decode";
import "../Components/Requirement/requirement.css";
import Req_feed from '../Components/Requirement/Req_feed';
import { useDispatch, useSelector } from "react-redux";
import {getAllOwnRequirements} from '../redux/actions/RequirementActions'
import { FaEdit} from "react-icons/fa";
import { useState, useEffect } from "react";
import { deleteRequirement } from "../redux/actions/RequirementActions";

const My_requirements = () => {
    const itemList = useSelector((state) => state.requirement.ownItems);
    // const status=useSelector((state=>state.requirement.addrequirementresponse))
    const [reload,setReload]=useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOwnRequirements());
        
      }, []);
      
      console.log(itemList);


      //delete-item
const handleClick=(data,e)=>{
    
    const token = localStorage.getItem("jwt");
      const decoded = jwt_decode(token);
   dispatch(deleteRequirement(data._id,decoded.auth_token));
   window.location.reload(true);
setReload(true);

}
    
    return (
    
  <div className='requirement_page'>
     
      <div className='page_content'>
      {itemList.map((item,index)=>{
          return(
             <Req_feed key={index} editOption={true} postedBy={"You"} handleClick={handleClick} data = {item} />
          )
      })}
      
     
      </div>
   
     
     
      
    
    
  </div>
    );
};

export default My_requirements;
