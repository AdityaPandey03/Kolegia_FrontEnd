import "./App.css";
import Cards from "./Components/Buy_sell/Cards/Cards";
import { useState } from "react";
import CarousleCards from "../src/Components/CarousleCards";
import LoginSignup from "../src/Components/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Appbar/Navbar";

import Loader from "./Components/Loader/Loader";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Appbar/Navbar";
import Bcards from "./Components/Lost_Found/Cards/Bcards";
import Dropdown from "./Components/Dropdown/Dropdown";

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        {/* <Loader/> */}
        <Navbar />
        {/* <Dropdown className='drop'/> */}
        <Routes>
          <Route path="/loginsignup" exact element={<LoginSignup />}></Route>
          <Route path="/carousel" exact element={<CarousleCards />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/buySell" element={<Cards />} />
          <Route exact path="/lostFound" element={<Bcards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
