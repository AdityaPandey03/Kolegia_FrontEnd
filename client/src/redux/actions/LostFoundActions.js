import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ALL_LOST_FOUND_ITEMS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_LOST_FOUND_ITEM,
  ADD_NEW_LOST_FOUND_ITEM,
  NEW_REQUEST,
  GET_MY_OWN_LOST_FOUND_ITEMS,
  EDIT_LOST_FOUND_ITEM,
  DELETE_LOST_FOUND_ITEM,
  RESET_STATUS,
  CHECKING_ERROR
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

export const getAllOwnLostFoundItems = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
    try {
      const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/lost-found-items/get-own-lost-found-list",{
          headers:{
            authorization:`Bearer ${decoded.auth_token}`,
          },
        }
        
      );
    console.log(data);
      dispatch({
        type: GET_MY_OWN_LOST_FOUND_ITEMS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const editLostFoundItem= (formData)=> async (dispatch) => {
    
    
    try {
      var token = "";
      for (var key of formData.entries()) {
        if (key[0] === "token") {
          token = key[1];
        }
      }
     const res=  await axios.put(
        "http://localhost:3000/api/v1/lost-found-items/edit-lost-found-product",formData
          
        
          ,{
            headers:{
              authorization:`Bearer ${token}`,
            }
          }
        
      );
    console.log(res)
      dispatch({
        type: EDIT_LOST_FOUND_ITEM,
        payload:res
       
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch({
            type:CHECKING_ERROR,
            payload:error.response,
        })
      }
    }
  };

  export const deleteLostFoundItem = (product_id,token)=> async (dispatch) => {
    // console.log(requirement_id,token);
    
      try {
  
       const res=  await axios.delete(
          "http://localhost:3000/api/v1/lost-found-items/delete-lost-found-product",{
            product_id
       }
            ,{
              headers:{
                authorization:`Bearer ${token}`,
              }
            }
          
        );
      console.log(res);
        dispatch({
          type: DELETE_LOST_FOUND_ITEM,
          payload:res
         
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          dispatch({
              type:CHECKING_ERROR,
              payload:error.response,
          })
        }
      }
    };

  export const resetStatus=(dispatch)=>{
    dispatch({
      type:RESET_STATUS,
    }

    )

   };