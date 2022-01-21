import { useState } from "react";
import "./Modal.css";

 function Modal({toggleModal,modal}) {
  const [name,setName]=useState('');
  const [des,setDes]=useState('');
  const [time,setTime]=useState('');


  return (
    <>
      

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add item</h2>
            <label htmlFor="input">Name of product</label>
            <input type="text" />
            <label htmlFor="input">description</label>
            <input type="text" />
            <label htmlFor="input">Time</label>
            <input type="text" />
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
