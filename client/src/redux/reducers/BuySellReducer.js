import {
  GET_ALL_BUY_SELL_ITEMS,
  NEW_REQUEST,
  GET_SINGLE_BUY_SELL_ITEM,
  ADD_NEW_BUY_SELL_ITEM,
} from "../constants/AllConstants";

const initialState = {
  itemList: [],
  singleProduct: {},
  firstImage: "",
  isLoading: false,
};

const BuySellReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUY_SELL_ITEMS:
      return {
        ...state,
        isLoading: false,
        itemList: action.payload.products,
      };
    case NEW_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_SINGLE_BUY_SELL_ITEM:
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload.Product,
        firstImage: action.payload.Product.files
          ? action.payload.Product.files[0].uri
          : "",
      };
    case ADD_NEW_BUY_SELL_ITEM:
      return state;

    default:
      return state;
  }
};

export default BuySellReducer;
