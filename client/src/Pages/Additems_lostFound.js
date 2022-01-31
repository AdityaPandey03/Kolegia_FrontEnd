import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addNewLostFoundItem } from "../redux/actions/LostFoundActions";

 function Modal({toggleModal,modal}) {
  const [itemName,setItemName]=useState('');
  const [location,setLocation]=useState('');
  const [postedBy,setPostedBy]=useState('');
 const [date,setDate]=useState(0);
 const [imageList,setImageList]=useState([])
 const [brand,setBrand]=useState('');
 const [category,setCategory]=useState('');
 


const dispatch=useDispatch();

// const handleClick=()=>{
//   dispatch(addNewBuySellItem(itemName));
// }

  return (
    <>
      
      {/* itemName, price, description, userId, postedBy */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={()=>dispatch(addNewLostFoundItem(itemName,location,postedBy,date,imageList,brand,category))}>
            <h2>Add item</h2>
            <label  htmlFor="input">Name of product</label>
            <input onChange={e=>setItemName(e.target.value)} type="text" />
            <label  htmlFor="input">Your-name</label>
            <input onChange={e=>setPostedBy(e.target.value)} type="text" />
            <label htmlFor="input">Location</label>
            <input onChange={e=>setLocation(e.target.value)} type="text" />
            <label htmlFor="input">Date</label>
            <input onChange={e=>setDate(e.target.value)} type="number" />
            <label htmlFor="input">Brand</label>
            <input onChange={e=>setBrand(e.target.value)} type="number" />
            <label htmlFor="input">Category</label>
            <input onChange={e=>setCategory(e.target.value)} type="number" />
            <label htmlFor="input">Upload-Image</label>
            <input onChange={e=>setImageList(e.target.value)} type="file" multiple />
            <button>Submit</button>
            </form>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            
          </div>
        </div>
      )}
     
    </>
  );
}

export default Modal;
