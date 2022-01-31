import "./App.css";
import Cards from "./Pages/Buy_sell";



import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Appbar/Navbar";

// import Loader from "./Components/Loader/Loader";
import Dashboard from "./Pages/Dashboard";
// import Navbar from "./Components/Appbar/Navbar";
import Bcards from "./Pages/Lost_found";
import Dropdown from "./Components/Dropdown/Dropdown";
import ProductDetails from "./Pages/ProductDetails_buySell";
import LoginSignUp from "./Pages/Login";
import ProfileMobile from "./Pages/ProfileMobile";
import Homepage from './Components/homepage/Homepage'


function App() {
  return (
    
    
    <BrowserRouter>
      <div className="App">
        {/* <Loader/> */}
        {/* <Navbar /> */}
        {/* <Dropdown className='drop'/> */}
        <Routes>
        <Route path="/" exact element={<Homepage/>}></Route>
          <Route path="/loginSignUp" exact element={<LoginSignUp/>}></Route>

          
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/buySell" element={<Cards />} />
          <Route exact path="/lostFound" element={<Bcards />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/profile" element={<ProfileMobile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
