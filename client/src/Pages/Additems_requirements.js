import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addRequirements ,resetStatus} from "../redux/actions/RequirementActions";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";

function Modal({ toggleModal, modal }) {
  const navigate= useNavigate();
  const errorMessage4=useSelector((state)=>state.requirement.errorMessageRequirements)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reload,setReload]=useState(false)
  const status5=useSelector((state=>state.requirement.addrequirementresponse))

  if(status5===200){
    dispatch(resetStatus);
    window.location.reload(true);
     
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
      const decoded = jwt_decode(token);
    const formData = new FormData();

    // formData.append("title", title);
    // formData.append("description", description);
    // formData.append("token", decoded.auth_token);

    dispatch(addRequirements(title,description,decoded.auth_token));
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{ color: "#332A7C" }}>Add item</h2>
            <form style={{display:'flex',flexDirection:'column',alignItems:'center'}}  onSubmit={handleSubmit}>
              <label htmlFor="input">Title</label>
              <input onChange={(e) => setTitle(e.target.value)} type="text" />

              <label htmlFor="input">description</label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              />

              <button>Submit</button>
              <p>{errorMessage4}</p>
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
