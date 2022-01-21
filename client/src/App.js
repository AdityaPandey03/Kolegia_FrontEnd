import "./App.css";
import Cards from './Components/Buy_sell/Cards/Cards'
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import Navbar from "./Components/Appbar/Navbar";

import Loader from "./Components/Loader/Loader";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from './Components/Appbar/Navbar'
import Bcards from "./Components/Lost_Found/Cards/Bcards";



function App() {

  
    
  
  return (
    <BrowserRouter>
  <div className="App">
    {/* <Loader/> */}
    <Navbar />
<Routes>
  <Route exact path='/dashboard' element={<Dashboard/>}/>
  <Route  exact path='/buySell'  element={<Cards/>}/>
  <Route exact path='/lostFound'  element={<Bcards/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App;
