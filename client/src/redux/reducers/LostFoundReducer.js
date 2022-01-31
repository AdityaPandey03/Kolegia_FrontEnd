import {GET_ALL_LOST_FOUND_ITEMS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_LOST_FOUND_ITEM,
ADD_NEW_LOST_FOUND_ITEM } from'../constants/AllConstants'

const initialState = {
    itemList: [],
    singleProduct: {},
  firstImage: "",
  isLoading: false,
  };

  const LostFoundReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_LOST_FOUND_ITEMS:
        return {
          ...state,
          itemList: action.payload,
        };
        case GET_PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };
      case GET_SINGLE_LOST_FOUND_ITEM:
        return {
          ...state,
          isLoading: false,
          singleProduct: action.payload,
          firstImage: action.payload.itemImages
            ? action.payload.itemImages[0].img
            : "",
        };
        case ADD_NEW_LOST_FOUND_ITEM:
          return state;
      default:
        return state;
    }
  };
  
  export default LostFoundReducer;

