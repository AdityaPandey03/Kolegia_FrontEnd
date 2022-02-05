import axios from "axios";
import { 
    VERIFY_EMAIL,VERIFY_OTP ,
    ADD_USER_DETAILS,
    LOGIN_WITH_GOOGLE,
    LOGIN_WITH_GOOGLE_ERROR,
    LOGIN_WITH_EMAIL,
     CHECKING_ERROR
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
export const verifyOtp=(otp,otpId)=>async (dispatch)=>{

    try {
        const OtpResponse=await axios.post(
            "http://localhost:3000/api/v1/otp/verify-otp",{
                otp_id: otpId,
                otp: otp,
                verification_type: "EMAIL_VERIFICATION"
            }
            
        );
        // console.log(OtpResponse);
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
export const addUserDetails=(name,email,roll_number,hostel,phone,password,confirm_password,terms_accepted,room_number,year,batch)=>async (dispatch)=>{

    try {
        const addUserRes=await axios.post(
            "http://localhost:3000/api/v1/auth/register",{
                name:name,
                email:email,
                roll_number:roll_number,
                hostel:hostel,
                phone:phone,
                password:password,
                confirm_password:confirm_password,
                terms_accepted:terms_accepted,
                room_number:room_number,
                year:year,
                batch:batch
            }
            
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
export const loginWithGoogle=(ID_Token)=>async (dispatch)=>{

    try {
        const loginUserRes=await axios.post(
            "http://localhost:3000/api/v1/auth/google-login",{
               ID_Token:ID_Token,
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




