import axios from "axios";
import {GET_ALL_REQUIREMENTS,ADD_NEW_REQUIREMENT} from '../constants/AllConstants';

export const getAllRequirements = () => async (dispatch) => {
    try {
      const { data } = await axios.get(
        "api"
      );
      dispatch({
        type: GET_ALL_REQUIREMENTS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const addRequirements= (formData)=> async (dispatch) => {
    console.log(formData);
    try {
     const res=  await axios.post(
        "API",
          formData
        
      );
    console.log(res);
      dispatch({
        type: ADD_NEW_REQUIREMENT,
       
      });
    } catch (err) {
      console.log(err);
    }
  };