import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import jwt_decode from "jwt-decode";
import { editBuySellItem,resetStatus } from "../redux/actions/BuySellActions";
import {useLocation,useNavigate} from 'react-router-dom'

 function Modal() {
const dispatch=useDispatch();
const navigate= useNavigate();
const location=useLocation();
const productData=location.state.Data;

var Name,Description,Price,id;


if(productData){
   Name=productData.name;
   Description=productData.description;
   Price=productData.price;
   id=productData._id;
}


const [itemName,setItemName]=useState(Name);
const [description,setDescription]=useState(Description);
const [price,setPrice]=useState(Price);
const [imageList,setImageList]=useState([])




const  Status1=useSelector((state=>state.buySell.editBuySellResponse));

if(Status1===200){
    dispatch(resetStatus);
     navigate('/myOwnBuySellItems')
     
 }


const handleSubmit=(e)=>{
  e.preventDefault();
  const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

  const formData= new FormData();
  for(var i=0;i<imageList.length;i++){
    formData.append('files',imageList[i]);
  }
  formData.append('product_id',id);
  formData.append('name',itemName)
  formData.append('description',description)
  formData.append('price',price)
  formData.append("token", decoded.auth_token);
  

  dispatch(editBuySellItem(formData));

}

  return (
  
      
    
        <div className="modal">
          <div  className="overlay"></div>
          <div className="modal-content">
          <h2 style={{color:'#332A7C',marginBottom:'10px'}}>Add Product</h2>
            <form  onSubmit={handleSubmit}>
           
            <label  htmlFor="input">Name of product</label>
            <input defaultValue={Name}  onChange={e=>setItemName(e.target.value)} type="text" />
           
            <label  htmlFor="input">description</label>
            <input defaultValue={Description} onChange={e=>setDescription(e.target.value)} type="text" />
            <label htmlFor="input">Price</label>
            <input defaultValue={Price} onChange={e=>setPrice(e.target.value)} type="number" />
            <label htmlFor="input">Upload-Image</label>
            <input style={{border:'none'}} onChange={e=>setImageList([...imageList,...e.target.files])} type="file" multiple />
            <button>Submit</button>
            </form>

            
            
          </div>
         </div>
     
     
    
  );
}

export default Modal;
