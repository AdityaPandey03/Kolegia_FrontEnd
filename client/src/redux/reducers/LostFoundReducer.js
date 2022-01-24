import {GET_ALL_LOST_FOUND_ITEMS } from'../constants/AllConstants'

const initialState = {
    itemList: [],
  };

  const LostFoundReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_LOST_FOUND_ITEMS:
        return {
          ...state,
          itemList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default LostFoundReducer;

