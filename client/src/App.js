import "./App.css";
import Cards from "./Pages/Buy_sell";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Loader from "./Components/Loader/Loader";
import Dashboard from "./Pages/Dashboard";

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
import Requirement from "./Pages/Requirement";
import Edit_MyRequirement from "./Pages/Edit_MyRequirement";

import Edit_MyBuySellItems from "./Pages/Edit_MyBuySellItems";

import Edit_MyLostFoundItems from "./Pages/Edit_MyLostFoundItems";
import ChatRoom from "./Components/ChatComponents/ChatRoom/ChatRoom";
import SideBar from "./Components/SideAppbarr/SideBar";
import VerifyEmailPage from "./Pages/VerifyEmailPage";
import ResetPassword from "./Pages/ResetPassword";
import LostFoundResponses from "./Pages/LostFoundResponses";
import Messenger from "./Pages/Messenger";
import Edit_Profile from "./Pages/Edit_Profile";
import ProfilePage from "./Components/profile/ProfilePage"
import Change_Password from "./Pages/Change_Password";
import SignUpPage from './Pages/SignUpPage'
import Not_Found from "./Components/Not_Found/Not_Found";
import AddBuySell from "./Pages/Additems_buySell";
import {PrivateRoute} from "./Components/PrivateRoute";
import {PrivateRoute2} from "./Components/PrivateRoute2";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FFFF00",
    },
  },
});

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          {/* <Loader/> */}

          {/* <Dropdown className='drop'/> */}

          <Routes>
            <Route path="/" exact element={<PrivateRoute2><Homepage /></PrivateRoute2>}></Route>

            <Route path="*" exact element={<Not_Found />}></Route>

            <Route path="/loginSignUp" exact element={<PrivateRoute2><LoginSignUp /></PrivateRoute2>}></Route>
            <Route exact path="/signUpForm" element={<PrivateRoute2><SignUpForm /></PrivateRoute2>} />
            <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route exact path="/otpPage" element={<PrivateRoute2><OtpPage /></PrivateRoute2>} />
            <Route exact path="/buySell" element={<PrivateRoute><Cards /></PrivateRoute>} />
            <Route exact path="/lostFound" element={<PrivateRoute><Bcards /></PrivateRoute>} />
            <Route exact path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
            <Route exact path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route exact path="/requirements" element={<PrivateRoute><Requirement /></PrivateRoute>} />
            <Route exact path="/resetPassword" element={<ResetPassword />} />
            <Route exact path="/editProfile" element={<PrivateRoute><Edit_Profile /></PrivateRoute>} />
            <Route exact path="/verifyEmail" element={<PrivateRoute2><VerifyEmailPage /></PrivateRoute2>} />
            <Route exact path='changePassword' element={<Change_Password/>}/>
            <Route exact path='signUp' element={<PrivateRoute2><SignUpPage/></PrivateRoute2>}/>

            <Route
              exact
              path="/editMyRequirement"
              element={<PrivateRoute><Edit_MyRequirement /></PrivateRoute>}
            />
            <Route
              exact
              path="/editMyBuySellItems"
              element={<PrivateRoute><Edit_MyBuySellItems /></PrivateRoute>}
            />
            <Route
              exact
              path="/lostItem/:id"
              element={<PrivateRoute><LostFoundItemDetails /></PrivateRoute>}
            />
            <Route exact path="/lostItem/addItem" element={<PrivateRoute><AddItem /></PrivateRoute>} />
            <Route exact path="/buySell/addItem" element={<PrivateRoute><AddBuySell /></PrivateRoute>} />
            <Route exact path="sidebar/*" element={<SideBar />} />

            <Route
              exact
              path="/editLostFoundItems/:id"
              element={<PrivateRoute><Edit_MyLostFoundItems /></PrivateRoute>}
            />
            <Route exact path="/chatRoom" element={<PrivateRoute><Messenger /></PrivateRoute>} />
            <Route exact path="/responses" element={<PrivateRoute><LostFoundResponses /></PrivateRoute>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
