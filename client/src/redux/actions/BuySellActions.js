import axios from "axios";
import { GET_ALL_BUY_SELL_ITEMS } from "../constants/AllConstants";

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
