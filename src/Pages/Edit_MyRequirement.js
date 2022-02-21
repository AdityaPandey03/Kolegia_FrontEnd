import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { editRequirements,resetStatus } from "../redux/actions/RequirementActions";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import {  useNavigate,useLocation } from "react-router-dom";



function Modal() {
  const navigate= useNavigate();
  const location=useLocation();
  const productData=location.state.Data;
var Title,Description,id;

  if(productData){
     Title=productData.title;
     Description=productData.description;
     id=productData._id;
  }

  
  const errorMessage2=useSelector((state)=>state.requirement.errorMessageRequirements)
  const [title, setTitle] = useState(Title);
  const [description, setDescription] = useState(Description);

     const dispatch = useDispatch();




 const  Status=useSelector((state=>state.requirement.editRequirementresponse));
 
   if(Status===200){
    dispatch(resetStatus);
     navigate('/sidebar/myOwnRequirements')
     
 }




 

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
      const decoded = jwt_decode(token);
    // const formData = new FormData();

    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("token", decoded.auth_token);

    dispatch(editRequirements(id,title,description,decoded.auth_token));
  };

  return (
    
       
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
            <h2 style={{ color: "#332A7C" }}>Edit item</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="input">Title</label>
              <input defaultValue={Title} onChange={(e) => setTitle(e.target.value)} type="text" />

              <label htmlFor="input">description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                defaultValue={Description}
              />

              <button>Submit</button>
              <p>{errorMessage2}</p>
            </form>


          
          </div>
        </div>
      
    
  );
}

export default Modal;
