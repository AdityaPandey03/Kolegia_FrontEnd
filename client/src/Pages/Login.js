import '../Components/LoginSignUp/Login.css'
import { useDispatch ,useSelector} from "react-redux";
import { useState } from 'react';
import {verifyEmail} from '../redux/actions/authActions'
import { Link, useNavigate } from "react-router-dom";
 

const LoginSignUp = () => {
  const verifyEmailResponse= useSelector((state) => state.auth.status);
  console.log(verifyEmailResponse);

  const navigate = useNavigate();

 const [email,setEmail]= useState('')
 const [message,setMessage]=useState('')


 //otp-verified-here

 if(verifyEmailResponse){
 if(verifyEmailResponse===200){
  navigate('/otpPage');
}else{
  setMessage('User already exist');
}
 }
 console.log(message);

 const dispatch=useDispatch();

const handleClick1=()=>{
    document.getElementById("container").classList.add("right-panel-active");
}
const handleClick2=()=>{
    document.getElementById("container").classList.remove("right-panel-active");
}

const handleSubmit=()=>{
  if(email.length){
  dispatch(verifyEmail(email));
  }
  else{
    setMessage('Email is required');
  }
  
}
    return ( 
        <div className="body">
        
    
        <div className="container" id="container">
          <div>
            <div className="form-container sign-up-container">
              <div className="signup-form form2">
                <h1 className='h1'>Create Account</h1>
    
                
                <div>
                  <input
                    className="signup-email input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
               
                
                <button onClick={handleSubmit} className="submit button">Verify Email</button>
                <p style={{color:'black'}}>{message}</p>
              </div>
            </div>
            <div className="form-container sign-in-container">
              <form className="signin-form form2 " action="#">
                <h1 className='h1'>Sign In</h1>
                <div>
                  <input
                    className="signin-email input"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    className="signin-password input"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
    
                <button className="submit button">Sign In</button>
              </form>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className='h1'>You're Welcome</h1>
                <p className='p'>Login to Enter the Kolegia</p>
                <button className="ghost button" id="signIn" onClick={handleClick2}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className='h1'>Hey, Buddy!</h1>
    
                <p className='p'>Oops! don't have an account? Signup</p>
                <button className="ghost button" id="signUp" onClick={handleClick1}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    
        
      </div>
     );
}
 
export default LoginSignUp;