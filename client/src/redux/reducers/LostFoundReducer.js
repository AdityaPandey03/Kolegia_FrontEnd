import {
  GET_ALL_LOST_FOUND_ITEMS,
  GET_SINGLE_LOST_FOUND_ITEM,
  ADD_NEW_LOST_FOUND_ITEM,
  NEW_REQUEST,
} from "../constants/AllConstants";

const initialState = {
  lostFoundItemList: [],
  singleProduct: {},
  firstImage: "",
  isLoading: false,
};

const LostFoundReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LOST_FOUND_ITEMS:
      return {
        ...state,
        isLoading: false,
        lostFoundItemList: action.payload,
      };
    case NEW_REQUEST:
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
