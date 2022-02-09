import { GET_ALL_REQUIREMENTS,
  ADD_NEW_REQUIREMENT,
  NEW_REQUEST ,
  CHECKING_ERROR,
GET_MY_OWN_REQUIREMENTS,
EDIT_REQUIREMENT,
RESET_STATUS} from "../constants/AllConstants";

const initialState = {
    items: [],
    Loading:false,
    addrequirementresponse:"",
    errorMessageRequirements:'',
    ownItems:[],
    editRequirementresponse:""
    
  };

  const RequirementReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_REQUIREMENTS:
        return {
          ...state,
          items: action.payload.requirements,
          Loading: false,
        };
     
        case NEW_REQUEST:
          return {
            ...state,
            Loading: action.payload,
          };
    
      
        case ADD_NEW_REQUIREMENT:
          return{
          ...state,
          addrequirementresponse:action.payload.status
          } 
          case GET_MY_OWN_REQUIREMENTS:
            return {
              ...state,
              ownItems: action.payload.Requirements,
              Loading: false,
            };

            case EDIT_REQUIREMENT:
          return{
          ...state,
          editRequirementresponse:action.payload.status
          } 
          case CHECKING_ERROR:
            return{
                ...state,
                errorMessageRequirements:action.payload.data.message,
                

            };

            case RESET_STATUS:{
              return{
                ...state,
                editRequirementresponse:''
              }
            }

  
  
      default:
        return state;
    }
  };

  export default RequirementReducer;