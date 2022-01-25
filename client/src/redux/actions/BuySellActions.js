import axios from "axios";
import {
  GET_ALL_BUY_SELL_ITEMS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_BUY_SELL_ITEM,
} from "../constants/AllConstants";

export const getAllBuySellItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://localhost:8000/api/buysell/getproducts"
    );
    dispatch({
      type: GET_ALL_BUY_SELL_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProductDetails = (itemId) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_DETAILS_REQUEST,
    payload: true,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/buysell/getproduct/${itemId}`
    );
    console.log(data);
    dispatch({
      type: GET_SINGLE_BUY_SELL_ITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
