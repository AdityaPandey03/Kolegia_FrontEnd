import { VERIFY_EMAIL, VERIFY_OTP,
    ADD_USER_DETAILS,
     LOGIN_WITH_GOOGLE,
    LOGIN_WITH_EMAIL,CHECKING_ERROR,
    LOGIN_WITH_GOOGLE_ERROR } from "../constants/AllConstants";

const initialState={
    otpStatusCode:'',
   loginStatusCode:'',
    errorMessage:'',
    otpId:'',
    addUserResponse:'',
    loginWithGoogleResponse:'',
    loginWithGoogleErrorResponse:'',
    loginWithEmailResponse:''
}

const AuthReducer=(state=initialState,action)=>{
    switch(action.type){
        case VERIFY_EMAIL:
            return{
                ...state,
                loginStatusCode:action.payload.status,
                otpId:action.payload.data.otp_id
            };
            
               
                    case VERIFY_OTP:
                        return{
                            ...state,
                            otpStatusCode:action.payload.status,
                            
                        };
                    case ADD_USER_DETAILS:
                            return{
                                ...state,
                                addUserResponse:action.payload,
                                status:action.payload.status
                            };
                    case LOGIN_WITH_GOOGLE:
                                return{
                                    ...state,
                                    loginWithGoogleResponse:action.payload
                                };
                                case LOGIN_WITH_GOOGLE_ERROR:
                                    return{
                                        ...state,
                                        loginWithGoogleErrorResponse:action.payload
                                    };
                                case LOGIN_WITH_EMAIL:
                                    return{
                                        ...state,
                                        loginWithEmailResponse:action.payload,
                                        status:action.payload.status
                                    };
                                    case CHECKING_ERROR:
                                        return{
                                            ...state,
                                            errorMessage:action.payload.data.message,
                                            status:action.payload.status
                    
                                        };
            default:
                return state;
    }
}

export default AuthReducer;