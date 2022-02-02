import axios from "axios";
import { VERIFY_EMAIL,VERIFY_OTP } from "../constants/AllConstants";

export const verifyEmail=(email)=>async (dispatch)=>{
    console.log(email);
    try {
        const res=await axios.post(
            "http://localhost:3000/api/v1/auth/send-email-register-otp",{
                email:email
            }
            
        );
        dispatch({
            type:VERIFY_EMAIL,
            payload:res,
        });
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}
export const verifyOtp=(otp,otpId)=>async (dispatch)=>{

    try {
        const Otpresponse=await axios.post(
            "http://localhost:3000/api/v1/otp/verify-otp",{
                otp_id: otpId,
                otp: otp,
                verification_type: "EMAIL_VERIFICATION"
            }
            
        );
        console.log(Otpresponse);
        dispatch({
            type:VERIFY_OTP,
            payload:Otpresponse,
        });
        // console.log(res);
    } catch (error) {
        console.log(error);
    }
}

//http://localhost:3000/api/v1/auth/send-email-register-otp


