import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ALL_BUY_SELL_ITEMS,
  NEW_REQUEST,
  GET_SINGLE_BUY_SELL_ITEM,
  ADD_NEW_BUY_SELL_ITEM,
  GET_MY_OWN_BUY_SELL_ITEMS,
  EDIT_BUY_SELL_ITEM,
  RESET_STATUS,
  CHECKING_ERROR_BUY_SELL,
  DELETE_BUY_SELL_ITEM
} from "../constants/AllConstants";

export const getAllBuySellItems = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    const { data } = await axios.get(
      
      "http://localhost:3000/api/v1/buy-sell-items/get-buy-sell-feed",{
        headers: {
          authorization: `Bearer ${decoded.auth_token}`,
        },
      
      }
    );
console.log(data);
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
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    const { data } = await axios.get(
      `http://localhost:3000/api/v1/buy-sell-items/get-buysell-product-details?product_id=${itemId}`,{
        headers:{
          authorization:`Bearer ${decoded.auth_token}`,
        },
      }
    );
  
    dispatch({
      type: GET_SINGLE_BUY_SELL_ITEM,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addNewBuySellItem = (formData) => async (dispatch) => {
 
  try {
    var token = "";
    for (var key of formData.entries()) {
      if (key[0] === "token") {
        token = key[1];
      }
    }
    const res = await axios.post("http://localhost:3000/api/v1/buy-sell-items/create-new-buysell-product", formData,{
      headers:{
        authorization:`Bearer ${token}`,
      }
    });

    dispatch({
      type: ADD_NEW_BUY_SELL_ITEM,
      payload:res,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      dispatch({
          type:CHECKING_ERROR_BUY_SELL,
          payload:error.response,
      })
    }
  }
};

export const getAllOwnBuySellItems = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
    try {
      const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/buy-sell-items/get-own-buy-sell-list",{
          headers:{
            authorization:`Bearer ${decoded.auth_token}`,
          },
        }
        
      );
    // console.log(data);
      dispatch({
        type: GET_MY_OWN_BUY_SELL_ITEMS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const editBuySellItem= (formData)=> async (dispatch) => {
    
    
    try {
      var token = "";
      for (var key of formData.entries()) {
        if (key[0] === "token") {
          token = key[1];
        }
      }
     const res=  await axios.put(
        "http://localhost:3000/api/v1/buy-sell-items/edit-buy-sell-product",formData
          
        
          ,{
            headers:{
              authorization:`Bearer ${token}`,
            }
          }
        
      );
    console.log(res)
      dispatch({
        type: EDIT_BUY_SELL_ITEM,
        payload:res
       
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch({
            type:CHECKING_ERROR_BUY_SELL,
            payload:error.response,
        })
      }
    }
  };

  //delete

  export const deleteBuySellItem= (product_id,token)=> async (dispatch) => {
    // console.log(requirement_id,token);
    
      try {
  
       const res=  await axios.delete(
          "http://localhost:3000/api/v1/buy-sell-items/delete-buy-sell-product",
            
       {
            
              headers:{
                authorization:`Bearer ${token}`,
              },
              data:{
                product_id,
              },
            }
          
        );
      console.log(res);
        dispatch({
          type: DELETE_BUY_SELL_ITEM,
          payload:res
         
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
          dispatch({
              type:CHECKING_ERROR_BUY_SELL,
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
