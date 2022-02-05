
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import { useDispatch ,useSelector} from "react-redux";
import {loginWithGoogle} from '../../redux/actions/authActions'
import {  useNavigate } from "react-router-dom";

function Googlelogin() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const errorResponse=useSelector((state)=>state.auth.loginWithGoogleErrorResponse)
  const successResponse=useSelector((state)=>state.auth.loginWithGoogleResponse)

  var ErrorMessage;
  
  if(errorResponse){
  
   if(errorResponse.status===500){
     ErrorMessage=errorResponse.data.message
     
   }
   if(errorResponse.status===404){
    navigate('/signUpForm',{
      state:{Email:errorResponse.user_details.email,
              name:errorResponse.user_details.name,
            profile_picture:errorResponse.user_details.profile_picture}
    });
   }
  }
    if(successResponse.data){
      if(successResponse.data.user_token){
        localStorage.setItem("jwt",successResponse.data.user_token);
        navigate('/dashboard');
      }

    }

// const clientId=776693258230-ao65omhjlnr88mbsrm90q87j3aetp1ev.apps.googleusercontent.com
  const handleFailure = (result) => {
      console.log(result)
  
  };

  const handleLogin =  (googleData) => {
      console.log(googleData);
      dispatch(loginWithGoogle(googleData.tokenId))
  }
  return (
    <div >
      
       
        <div>
            <GoogleLogin
              clientId='783014303868-kjghpnb5lk3h2099mepfcl0qrb7f1e3q.apps.googleusercontent.com'
              buttonText="Continue  with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
            
          
        </div>
        <p style={{color:'black'}}>{ErrorMessage}</p>
     
    </div>
  );
}

export default Googlelogin;