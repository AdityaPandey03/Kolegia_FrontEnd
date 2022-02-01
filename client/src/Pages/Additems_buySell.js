import { useState } from "react";
import { useDispatch } from "react-redux";
import "../Components/Buy_sell/AddItems.css";
import { addNewBuySellItem } from "../redux/actions/BuySellActions";

 function Modal({toggleModal,modal}) {
  const [itemName,setItemName]=useState('');
  const [description,setDescription]=useState('');
  const [postedBy,setPostedBy]=useState('');
 const [price,setPrice]=useState(0);
 const [imageList,setImageList]=useState([])
 

 
const dispatch=useDispatch();





 


const handleSubmit=()=>{
  const formData= new FormData();
  for(var i=0;i<imageList.length;i++){
    formData.append('imageList',imageList[i]);
  }
  formData.append('itemName',itemName)
  formData.append('description',description)
  formData.append('price',price)
  formData.append('postedBy',postedBy)

  dispatch(addNewBuySellItem(formData));

}

  return (
    <>
      
      {/* itemName, price, description, userId, postedBy */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
            <h2>Add item</h2>
            <label  htmlFor="input">Name of product</label>
            <input onChange={e=>setItemName(e.target.value)} type="text" />
            <label  htmlFor="input">Your-name</label>
            <input onChange={e=>setPostedBy(e.target.value)} type="text" />
            <label htmlFor="input">description</label>
            <input onChange={e=>setDescription(e.target.value)} type="text" />
            <label htmlFor="input">Price</label>
            <input onChange={e=>setPrice(e.target.value)} type="number" />
            <label htmlFor="input">Upload-Image</label>
            <input onChange={e=>setImageList([...imageList,...e.target.files])} type="file" multiple />
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
