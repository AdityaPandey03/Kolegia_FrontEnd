import { VERIFY_EMAIL, VERIFY_OTP,SIGN_UP_ERROR,ADD_USER_DETAILS } from "../constants/AllConstants";

const initialState={
    otpres:0,
    status:'',
    signUpError:'',
    otpId:'',
    addUserResponse:''
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case VERIFY_EMAIL:
            return{
                ...state,
                status:action.payload.status,
                otpId:action.payload.data.otp_id
            };
            
                case SIGN_UP_ERROR:
                    return{
                        ...state,
                        signUpError:'User already exist',
                        status:401

                    };
                    case VERIFY_OTP:
                        return{
                            ...state,
                            otpres:action.payload.status
                        };
                    case ADD_USER_DETAILS:
                            return{
                                ...state,
                                addUserResponse:action.payload
                            };
            default:
                return state;
    }
}

export default AuthReducer;