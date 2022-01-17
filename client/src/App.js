import "./App.css";
import Cards from './Components/Cards/Cards'
import { useState } from "react";

// import Navbar from "./Components/Appbar/Navbar";
import Modal from "./Components/Modal/Modal";
import Loader from "./Components/Loader/Loader";
import Dashboard from "./Components/Dashboard/Dashboard";


function App() {

  
    const [modal, setModal] = useState(false);
  
    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
  return <div className="App">
    
    {/* <Navbar />
    
    <Cards/>
    <div className="circle"><button onClick={toggleModal} className="btn-modal btn">
        +
      </button></div>
    
    <Modal const toggleModal={toggleModal} modal={modal} /> */}
    {/* <Loader/> */}
    
<Dashboard/>
  </div>;
}

export default App;
