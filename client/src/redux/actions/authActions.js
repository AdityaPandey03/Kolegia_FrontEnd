import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


import { 
    VERIFY_EMAIL,VERIFY_OTP ,
    ADD_USER_DETAILS,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_GOOGLE_ERROR,
    LOGIN_WITH_EMAIL,
     CHECKING_ERROR,USER_LOGOUT,
     VERIFY_EMAIL_FOR_RESET,
     RESET_PASSWORD,
     EDIT_PROFILE,
     RESET_PROFILE_STATUS,
     GET_DASHBOARD_STATS,
     RESET_ERROR_MESSAGE,
     CHANGE_PASSWORD
   
    } from "../constants/AllConstants";

export const verifyEmail=(email)=>async (dispatch)=>{
    console.log(email);
    try {
        const emailResponse=await axios.post(
            "http://localhost:3000/api/v1/auth/send-email-register-otp",{
                email:email
            }
            
        );
        console.log(emailResponse);
        dispatch({
            type:VERIFY_EMAIL,
            payload:emailResponse,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
       
    }
}
export const verifyEmailForReset=(email)=>async (dispatch)=>{
    console.log(email);
    try {
        const emailResponseforReset=await axios.post(
            "http://localhost:3000/api/v1/auth/send-forgot-password-otp",{
                email:email
            }
            
        );
        console.log(emailResponseforReset);
        dispatch({
            type:VERIFY_EMAIL_FOR_RESET,
            payload:emailResponseforReset,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
       
    }
}
export const verifyOtp=(otp,otpId,Verification)=>async (dispatch)=>{

    try {
        const OtpResponse=await axios.post(
            "http://localhost:3000/api/v1/otp/verify-otp",{
                otp_id: otpId,
                otp: otp,
                verification_type: Verification
            }
            
        );
        console.log(OtpResponse);
        dispatch({
            type:VERIFY_OTP,
            payload:OtpResponse,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
    }
}
export const verifyOtpForResetPassword=(otp,otpId)=>async (dispatch)=>{

    try {
        const OtpResponse=await axios.post(
            "http://localhost:3000/api/v1/otp/verify-otp",{
                otp_id: otpId,
                otp: otp,
                verification_type: "EMAIL_VERIFICATION"
            }
            
        );
        console.log(OtpResponse);
        dispatch({
            type:VERIFY_OTP,
            payload:OtpResponse,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
    }
}
export const addUserDetails=(data)=>async (dispatch)=>{

    try {
        const addUserRes=await axios.post(
            "http://localhost:3000/api/v1/auth/register",
               
            data
            
            
        );
        // console.log(OtpResponse);
        dispatch({
            type:ADD_USER_DETAILS,
            payload:addUserRes,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
    }
}
export const loginWithGoogle=(id_token)=>async (dispatch)=>{

    try {
        const loginUserRes=await axios.post(
            "http://localhost:3000/api/v1/auth/google-login",{
               id_token:id_token,
            }
            
        );
        console.log(loginUserRes);
        dispatch({
            type:LOGIN_WITH_GOOGLE,
            payload:loginUserRes,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:LOGIN_WITH_GOOGLE_ERROR,
                payload:error.response,
            })
          }
    }
}

export const signInWithEmail=(email,password)=>async (dispatch)=>{

    try {
        const loginUserRes=await axios.post(
            "http://localhost:3000/api/v1/auth/login",{
               email:email,
               password:password
            }
            
        );
        console.log(loginUserRes);
        dispatch({
            type:LOGIN_WITH_EMAIL,
            payload:loginUserRes,
        });
        // console.log(res);
    } catch (error) {
        if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
    }
}



export const logoutUser= (token)=> async (dispatch) => {
    
    
      try {
  
       const res=  await axios.delete(
          "http://localhost:3000/api/v1/auth/logout",
            
       {
            
              headers:{
                authorization:`Bearer ${token}`,
              }
             
            }
          
        );

       
      console.log(res);
        dispatch({
          type: USER_LOGOUT,
          payload:res
         
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          dispatch({
              type:CHECKING_ERROR,
              payload:error.response,
          })
        }
      }
    };
    export const resetPasswordAction=(email,password,reset_request_id)=>async (dispatch)=>{

        try {
            const resetResponse=await axios.post(
                "http://localhost:3000/api/v1/auth/reset-password",{
                   email,password,reset_request_id
                }
                
            );
            console.log(resetResponse);
            dispatch({
                type:RESET_PASSWORD,
                payload:resetResponse,
            });
            // console.log(res);
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                dispatch({
                    type:CHECKING_ERROR,
                    payload:error.response,
                })
              }
        }
    };
    export const changePasswordAction=(password,NewPassword)=>async (dispatch)=>{

        try {
            const token = localStorage.getItem("jwt");
            const decoded = jwt_decode(token);
            const changeResponse=await axios.put(
                "http://localhost:3000/api/v1/auth/change-password",{
                   CurrentPassword:password,
                   NewPassword:NewPassword

                }, {headers:{
                    authorization:`Bearer ${decoded.auth_token}`,
                  }
                }
                
            );
            console.log(changeResponse);
            dispatch({
                type:CHANGE_PASSWORD,
                payload:changeResponse,
            });
            // console.log(res);
        } catch (error) {
            if (error.response) {
                console.log(error.response);
                dispatch({
                    type:CHECKING_ERROR,
                    payload:error.response,
                })
              }
        }
    };
    export const editProfile= (formData)=> async (dispatch) => {
    
    
        try {
            const token = localStorage.getItem("jwt");
            const decoded = jwt_decode(token);
         const res=  await axios.put(
            "http://localhost:3000/api/v1/auth/edit-profile",formData
              
            
              ,{
                headers:{
                  authorization:`Bearer ${decoded.auth_token}`,
                }
              }
            
          );
        console.log(res)
          dispatch({
            type: EDIT_PROFILE,
            payload:res
           
          });
        } catch (error) {
          if (error.response) {
            console.log(error.response);
            dispatch({
                type:CHECKING_ERROR,
                payload:error.response,
            })
          }
        }
      };
      export const resetStatus=(dispatch)=>{
        dispatch({
          type:RESET_PROFILE_STATUS,
        }
    
        )
    
       };
       export const resetErrorMessage=(dispatch)=>{
        dispatch({
          type:RESET_ERROR_MESSAGE,
        }
    
        )
    
       };
    

 export const getDashBoardStats=() => async(dispatch)=>{

 try{
        const token = localStorage.getItem("jwt");
        const decoded = jwt_decode(token);

        const res = await axios.get(
          
          "http://localhost:3000/api/v1/auth/get-dashboard-statistics",{
            headers:{
              authorization:`Bearer ${decoded.auth_token}`,
            },
          }
        );
    console.log(res);
        dispatch({
          type: GET_DASHBOARD_STATS,
          payload: res,
        });
      } catch (err) {
        console.log(err);
      }
    }
       

       
        
       
  