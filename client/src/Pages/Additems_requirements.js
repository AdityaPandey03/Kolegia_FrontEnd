import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addRequirements } from "../redux/actions/RequirementActions";

 function Modal({toggleModal,modal}) {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  
const dispatch=useDispatch();

const handleSubmit=()=>{
  const formData= new FormData();
 
  formData.append('title',title)
  formData.append('description',description)
 
  dispatch(addRequirements(formData));

}

  return (
    <>
      
   
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2 style={{color:'#332A7C'}} >Add item</h2>
            <form onSubmit={handleSubmit}>
            
            <label  htmlFor="input">Title</label>
            <input onChange={e=>setTitle(e.target.value)} type="text" />
            
            <label htmlFor="input">description</label>
            <input onChange={e=>setDescription(e.target.value)} type="text" />
           
           
            <button>Submit</button>
            </form>

            <button className="close-modal" onClick={toggleModal}>
              +
            </button>
            
          </div>
        </div>
      )}
     
    </>
  );
}

export default Modal;
