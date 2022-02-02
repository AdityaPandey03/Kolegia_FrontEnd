import { VERIFY_EMAIL, VERIFY_OTP } from "../constants/AllConstants";

const initialState={
    otpres:0,
    emailres:'',
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case VERIFY_EMAIL:
            return{
                ...state,
                emailres:action.payload.data.otp_id
            };
            
            case VERIFY_OTP:
                return{
                    ...state,
                    otpres:action.payload
                };
            default:
                return state;
    }
}

export default AuthReducer;