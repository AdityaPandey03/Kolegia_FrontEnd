import { GET_ALL_BUY_SELL_ITEMS } from "../constants/AllConstants";

const initialState = {
  itemList: [],
};

const BuySellReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BUY_SELL_ITEMS:
      return {
        ...state,
        itemList: action.payload,
      };
    default:
      return state;
  }
};

export default BuySellReducer;
