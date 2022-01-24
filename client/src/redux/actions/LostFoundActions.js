import axios from 'axios'
 import {GET_ALL_LOST_FOUND_ITEMS } from '../constants/AllConstants'

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