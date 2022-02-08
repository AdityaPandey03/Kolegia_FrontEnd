import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ALL_LOST_FOUND_ITEMS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_LOST_FOUND_ITEM,
  ADD_NEW_LOST_FOUND_ITEM,
  NEW_REQUEST,
} from "../constants/AllConstants";

export const getAllLostFoundItems = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);

    const { data } = await axios.get(
      "http://localhost:3000/api/v1/lost-found-items/get-lost-found-feed",
      {
        headers: {
          authorization: `Bearer ${decoded.auth_token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: GET_ALL_LOST_FOUND_ITEMS,
      payload: data.products,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getLostFoundProductDetails = (itemData) => async (dispatch) => {
  // console.log(data.decoded.auth_token);
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/lost-found-items/get-lost-found-product-details?product_id=${itemData.product_id}`,
      {
        headers: {
          authorization: `Bearer ${itemData.decoded.auth_token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: GET_SINGLE_LOST_FOUND_ITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const addNewLostFoundItem = (data) => async (dispatch) => {
  try {
    var token = "";
    for (var key of data.entries()) {
      if (key[0] === "token") {
        token = key[1];
      }
    }
    console.log(token);
    const res = await axios.post(
      "http://localhost:3000/api/v1/lost-found-items/create-new-lost-found-product",
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: ADD_NEW_LOST_FOUND_ITEM,
      payload: res,
    });

    alert("Item added successfully");
  } catch (err) {
    console.log(err);
  }
};
