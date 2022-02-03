import axios from "axios";
import { VERIFY_EMAIL,VERIFY_OTP ,SIGN_UP_ERROR,ADD_USER_DETAILS} from "../constants/AllConstants";

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
        
       dispatch({
           type:SIGN_UP_ERROR,
           payload:error,
       })
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
        console.log(error.status);
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
        console.log(error.status);
    }
}




