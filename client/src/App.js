import "./App.css";
import Cards from "./Pages/Buy_sell";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Appbar/Navbar";

// import Loader from "./Components/Loader/Loader";
import Dashboard from "./Pages/Dashboard";
// import Navbar from "./Components/Appbar/Navbar";
import Bcards from "./Pages/Lost_found";
import Dropdown from "./Components/Dropdown/Dropdown";
import ProductDetails from "./Pages/ProductDetails_buySell";
import LoginSignUp from "./Pages/Login";
import ProfileMobile from "./Pages/ProfileMobile";
import Homepage from "./Components/homepage/Homepage";
import LostFoundItemDetails from "./Pages/ProductDetails_lostFound";
import AddItem from "./Pages/Additems_lostFound";
import OtpPage from "./Pages/OtpPage";
import SignUpForm from "./Pages/SignUp_form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Loader/> */}
        {/* <Navbar /> */}
    
        {/* <Dropdown className='drop'/> */}

        <Routes>
          <Route path="/" exact element={<Homepage/>}></Route>
          <Route path="/loginSignUp" exact element={<LoginSignUp />}></Route>
          <Route exact path="/signUpForm" element={<SignUpForm/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/otpPage" element={<OtpPage/>} />
          <Route exact path="/buySell" element={<Cards />} />
          <Route exact path="/lostFound" element={<Bcards />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/profile" element={<ProfileMobile />} />
          <Route
            exact
            path="/lostItem/:id"
            element={<LostFoundItemDetails />}
          />
          <Route exact path="/lostItem/addItem" element={<AddItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
