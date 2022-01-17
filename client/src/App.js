import "./App.css";
import LoginSignup from "./Components/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarousleCards from "./Components/CarousleCards";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loginsignup" exact element={<LoginSignup />}></Route>
          <Route path="/carousel" exact element={<CarousleCards />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
