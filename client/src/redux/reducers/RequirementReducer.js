import { GET_ALL_REQUIREMENTS,ADD_NEW_REQUIREMENT } from "../constants/AllConstants";

const initialState = {
    items: [],
    
  };

  const RequirementReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_REQUIREMENTS:
        return {
          ...state,
          itemList: action.payload,
        };
     
  
      
        case ADD_NEW_REQUIREMENT:
          return state;
  
  
      default:
        return state;
    }
  };

  export default RequirementReducer;