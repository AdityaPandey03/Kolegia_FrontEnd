import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import jwt_decode from "jwt-decode";

import "react-toastify/dist/ReactToastify.css";
import { addNewBuySellItem ,resetStatus} from "../redux/actions/BuySellActions";
import { toast,ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom";



 function AddBuySell() {
  const [itemName,setItemName]=useState('');
  const [description,setDescription]=useState('');
 const [price,setPrice]=useState(0);
 const [imageList,setImageList]=useState([])
 const [brand,setBrand]=useState('')
 const [color,setColor]=useState('')
 const [category,setCategory]=useState('')
 const [boughtTime,setBoughtTime]=useState('')
 const [warranty,setWarranty]=useState('')
const [done,setDone]=useState(false)
 const [createResponse, setCreateResponse] = useState("")

 

const status3=useSelector((state=>state.buySell.addItemsResponse));
const errorMessage=useSelector((state)=>state.buySell.errorMessageBuySell)
 
const dispatch=useDispatch();
const navigate = useNavigate();

const handleSubmit=async(e)=>{
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
  formData.append("token", decoded.auth_token)
  formData.append('category',category)
  formData.append('color',color)
  formData.append('bought_datetime',boughtTime)
  formData.append('warranty_till',warranty)
  formData.append('brand',brand)
  

  await dispatch(addNewBuySellItem(formData));
}
//TOASTIFY FUNCTION START
useEffect(() => {
  console.log(status3)
  if (status3=== 200) {
    setDone(true)
  } 
}, [status3]);

useEffect(()=>{
  if(done===true){
    toast.success("Item added successfully");
    navigate('/buySell');
  }
},[done])
//TOASTIFY FUNCTIONS END



  return (
    <>
      
      {/* itemName, price, description, userId, postedBy */}
      {
        <div className="modal">
          <div className="modal-content">
          <h2 style={{color:'#332A7C',marginBottom:'18px',fontFamily:"Inter, sans-serif"}}>Add Product</h2>
            <form className="form02" onSubmit={handleSubmit}>
           
            
            <input  onChange={e=>setItemName(e.target.value)} type="text" placeholder="Name of product" />
            <input onChange={e=>setBrand(e.target.value)} type="text" placeholder="Brand" />
            <input  onChange={e=>setColor(e.target.value)} type="text" placeholder="Color of product" />
            <input  onChange={e=>setDescription(e.target.value)} type="text" placeholder="Description" />
            <input  onChange={e=>setBoughtTime(e.target.value)} type="date" placeholder="Bought date" />
            <input  onChange={e=>setPrice(e.target.value)} type="number" placeholder="Price"/>
            <input  onChange={e=>setWarranty(e.target.value)} type="date" placeholder="Warranty Ends" />
            <input  onChange={e=>setCategory(e.target.value)} type="text" placeholder="Category" />
            <label style={{fontFamily:"Hind Siliguri, sans-serif",fontWeight:'700',fontSize:'18px'}} htmlFor="input">Upload-Image</label>
            <input  onChange={e=>setImageList([...imageList,...e.target.files])} type="file" multiple />
          <button type="submit" style={{fontFamily:"Inter, sans-serif",cursor:"pointer"}} >Submit</button>
            <p style={{fontFamily:"Hind Siliguri, sans-serif",fontWeight:'700',fontSize:'14px'}} >{errorMessage}</p>
            </form> 
          </div>
            
          </div>
      }
      
    </>
  );
}

export default AddBuySell;


