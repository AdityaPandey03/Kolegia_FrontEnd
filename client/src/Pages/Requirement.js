
import "../Components/Requirement/requirement.css";
import Req_feed from '../Components/Requirement/Req_feed';
import { useDispatch, useSelector } from "react-redux";
import {getAllRequirements} from '../redux/actions/RequirementActions'
import Modal from "./Additems_requirements"
import { FaPlusCircle} from "react-icons/fa";
import { useState, useEffect } from "react";

const Requirement = () => {
    const itemList = useSelector((state) => state.requirement.items);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRequirements());
        
      }, []);
      const toggleModal = () => {
        setModal(!modal);
      };

      if (modal) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }
    
    const data = [
        {
            title : "Mobile" ,
            description : "I want a old mobile phone under 7k in proper condition",
            posted_by : "Jayant Singh",
            posted_on : "12 Feb 2022",
           
        },
        {
            title : "Mobile" ,
            description : "I want a old mobile phone under 7k in proper condition",
            posted_by : "Jayant Singh",
            posted_on : "12 Feb 2022",
           
        },
        {
            title : "Mobile" ,
            description : "I want a old mobile phone under 7k in proper condition",
            posted_by : "Jayant Singh",
            posted_on : "12 Feb 2022",
            
        },
    ]
    return (
    
  <div className='requirement_page'>
      <div className='page_heading'>
          <h3>Requirement</h3>
          
      </div>
      <div className='page_content'>
      {data.map((item,index)=>{
          return(
             <Req_feed key={index} data = {item} />
          )
      })}
      
     
      </div>
      <div className="circle">
     
     <FaPlusCircle onClick={toggleModal} className="btn-modal btn"/>
      
    </div>
    <Modal const toggleModal={toggleModal} modal={modal} />
  </div>
    );
};

export default Requirement;
