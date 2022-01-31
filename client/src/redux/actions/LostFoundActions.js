import axios from 'axios'
 import {GET_ALL_LOST_FOUND_ITEMS ,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_SINGLE_LOST_FOUND_ITEM,
  ADD_NEW_LOST_FOUND_ITEM
} from '../constants/AllConstants'

 export const getAllLostFoundItems = () => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/lostfound/getlostitems"
      );
      dispatch({
        type:GET_ALL_LOST_FOUND_ITEMS ,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  export const getLostFoundProductDetails = (itemId) => async (dispatch) => {
    dispatch({
      type: GET_PRODUCT_DETAILS_REQUEST,
      payload: true,
    });
    try {
      const { data } = await axios.get(
        `API${itemId}`
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
  export const addNewLostFoundItem= (itemName,brand,category,postedBy,date,imageList)=> async (dispatch) => {
    try {
     const res=  await axios.post(
        "api/newproduct",{
          itemName,
        }
      );
    
      dispatch({
        type: ADD_NEW_LOST_FOUND_ITEM,
       
      });
    } catch (err) {
      console.log(err);
    }
  };