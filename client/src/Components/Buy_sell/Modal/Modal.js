import { useState } from "react";
import "./Modal.css";

 function Modal({toggleModal,modal}) {
  const [itemName,setItemName]=useState('');
  const [description,setDescription]=useState('');
  const [postedBy,setPostedBy]=useState('');
 const [price,setPrice]=useState(0);
 const [image,setImage]=useState([])
 
console.log(itemName)

  return (
    <>
      
      {/* itemName, price, description, userId, postedBy */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
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
            <input onChange={e=>setImage(e.target.value)} type="file" />
            <button>Submit</button>
            

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
