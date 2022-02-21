
import GoogleLogin from 'react-google-login';

import { useDispatch ,useSelector} from "react-redux";
import {loginWithGoogle,resetStatus} from '../../redux/actions/authActions'
import {  useNavigate } from "react-router-dom";

function Googlelogin() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const errorResponse=useSelector((state)=>state.auth.loginWithGoogleErrorResponse)
  const successResponse=useSelector((state)=>state.auth.loginWithGoogleResponse)

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

  var ErrorMessage;
  
  if(errorResponse){
  
   if(errorResponse.status===500){
     ErrorMessage=errorResponse.data.message
   }
   }
  
    if(successResponse){
      dispatch(resetStatus)
      if(isLoggedIn){
        localStorage.setItem("jwt",successResponse.data.user_token);
        navigate('/dashboard');
      } else{
        dispatch(resetStatus)
        navigate('/signUpForm',{
              state:{Email:successResponse.data.user_details.email,
                      name:successResponse.data.user_details.name,
                    profile_picture:successResponse.data.user_details.profile_picture}
      })
      
     

      }
  }
  const handleFailure = (result) => {
      console.log(result)
  
  };

  const handleLogin =  (googleData) => {
     
      dispatch(loginWithGoogle(googleData.tokenId))
  }
  return (
    <div >
      
       
        <div className='Google-login'>
            <GoogleLogin
            
              // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId='776693258230-18gd0unjibr0d8n5o3ajfrh3kislbf54.apps.googleusercontent.com'
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