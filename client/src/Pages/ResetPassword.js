import {useState} from 'react';
import { useDispatch ,useSelector} from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import {resetPasswordAction} from '../redux/actions/authActions'

const ResetPassword = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const location=useLocation();
    const loginWithEmailResponse=useSelector((state)=>state.auth.loginWithEmailResponse)
    const responseStatusCode= useSelector((state) => state.auth.resetStatusCode);
    const reset_request_id=useSelector((state)=>state.auth.requestId)
    const errorMessage=useSelector((state)=>state.auth.errorMessage)
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    
    console.log(responseStatusCode);
var Email;
    if(location.state !=null){
        Email=location.state.Email;
       
   }

    // if(responseStatusCode===200){
    //     navigate('/otpPage',{
    //       state:{Email:email,verification:'FORGOT_PASSWORD'}
    //     });}
    
    var message4;
    if(loginWithEmailResponse.data){
        if(loginWithEmailResponse.data.user_token){
          localStorage.setItem("jwt",loginWithEmailResponse.data.user_token);
          navigate('/dashboard');
      }
      }
      else {
        message4=errorMessage
      }
   
    const style={

box:{
    position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width:'400px',
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
        gap:"2rem",
        padding:'10px',
        borderRadius:'8px',
background: '#F0BC5E',
boxshadow:  '5px 5px 10px #b5b5b5,-5px -5px 10px #ffffff',
             
},
cont:{
    backgroundColor:'#332A7C',
    width:'100vw',
    height:'100vh'
}
}
     const handleClick =()=>{
         if(password===confirmPassword){
     dispatch(resetPasswordAction(Email,password,reset_request_id));}
     else{
         message4='Passwords do not match'
     }
    }


    return ( 
        <div style={style.cont} className="otp-container">
            <div style={style.box} className="otp-box">
            <p style={{fontSize:'1.3rem'}}>
               Reset Password
            </p>
            <input onChange={(e)=>setPassword(e.target.value)} style={{width:'12rem',height:'2rem'}} type="password" placeholder="Password"/>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} style={{width:'12rem',height:'2rem'}} type="password" placeholder="Confirm Password"/>
            <button onClick={handleClick} style={{width:'8rem',height:'2.5rem',background:'#332A7C',color:'white',fontSize:'1.1rem'}}>Submit</button>
            <p style={{color:'black'}}>{message4}</p>
            </div>
           
        </div>
     );
}
 
export default ResetPassword;