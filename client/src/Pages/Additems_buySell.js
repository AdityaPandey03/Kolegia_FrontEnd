import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import jwt_decode from "jwt-decode";

import { addNewBuySellItem ,resetStatus} from "../redux/actions/BuySellActions";

 function Modal({toggleModal,modal}) {
  const [itemName,setItemName]=useState('');
  const [description,setDescription]=useState('');
 const [price,setPrice]=useState(0);
 const [imageList,setImageList]=useState([])
 

 
const dispatch=useDispatch();

var Status3;
var Message3;

Status3=useSelector((state=>state.buySell.addItemsResponse));
const errorMessage4=useSelector((state)=>state.buySell.errorMessageBuySell)


if(Status3===200){
  dispatch(resetStatus);
  window.location.reload(true);
   
}else{
Message3=errorMessage4;
}


 


const handleSubmit=(e)=>{
  e.preventDefault();
  const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

  const formData= new FormData();
  for(var i=0;i<imageList.length;i++){
    formData.append('files',imageList[i]);
  }
  formData.append('name',itemName)
  formData.append('description',description)
  formData.append('price',price)
  formData.append("token", decoded.auth_token);
  

  dispatch(addNewBuySellItem(formData));

}

  return (
    <>
      
      {/* itemName, price, description, userId, postedBy */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2 style={{color:'#332A7C',marginBottom:'10px'}}>Add Product</h2>
            <form className="form02" onSubmit={handleSubmit}>
           
            <label  htmlFor="input">Name of product</label>
            <input onChange={e=>setItemName(e.target.value)} type="text" />
           
            <label htmlFor="input">description</label>
            <input onChange={e=>setDescription(e.target.value)} type="text" />
            <label htmlFor="input">Price</label>
            <input onChange={e=>setPrice(e.target.value)} type="number" />
            <label htmlFor="input">Upload-Image</label>
            <input style={{border:'none'}} onChange={e=>setImageList([...imageList,...e.target.files])} type="file" multiple />
            <button>Submit</button>
            <p>{Message3}</p>
            </form>

            <button  className="close-modal" onClick={toggleModal}>
              +
            </button>
            
          </div>
         </div>
      )}
     
    </>
  );
}

export default Modal;
