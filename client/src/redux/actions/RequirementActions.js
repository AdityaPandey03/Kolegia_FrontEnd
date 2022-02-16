import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ALL_REQUIREMENTS,
  ADD_NEW_REQUIREMENT,
  NEW_REQUEST,
  CHECKING_ERROR,
  GET_MY_OWN_REQUIREMENTS,
  EDIT_REQUIREMENT,
  RESET_STATUS,
  DELETE_REQUIREMENT,
  CHECKING_ERROR_REQUIREMENTS
} from "../constants/AllConstants";

export const getAllRequirements = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/requirements/get-requirement-feed",
      {
        headers: {
          authorization: `Bearer ${decoded.auth_token}`,
        },
      }
    );
    console.log(data);
    dispatch({
      type: GET_ALL_REQUIREMENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addRequirements =
  (title, description, token) => async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/requirements/create-a-requirement",
        {
          title,
          description,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      dispatch({
        type: ADD_NEW_REQUIREMENT,
        payload: res,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch({
          type: CHECKING_ERROR_REQUIREMENTS,
          payload: error.response,
        });
      }
    }
  };

export const getAllOwnRequirements = () => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });
  try {
    const token = localStorage.getItem("jwt");
    const decoded = jwt_decode(token);
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/requirements/get-own-requirements",
      {
        headers: {
          authorization: `Bearer ${decoded.auth_token}`,
        },
      }
    );

    dispatch({
      type: GET_MY_OWN_REQUIREMENTS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editRequirements =
  (requirement_id, title, description, token) => async (dispatch) => {
    try {
      const res = await axios.put(
        "http://localhost:3000/api/v1/requirements/edit-a-requirement",
        {
          requirement_id,
          title,
          description,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch({
        type: EDIT_REQUIREMENT,
        payload: res,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch({
          type: CHECKING_ERROR_REQUIREMENTS,
          payload: error.response,
        });
      }
    }
  };

export const deleteRequirement =
  (requirement_id, token) => async (dispatch) => {
    console.log(requirement_id, token);

    try {
      const res = await axios.delete(
        "http://localhost:3000/api/v1/requirements/delete-requirement",
        
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
          data: {
            requirement_id,
          },
        }
      );
      console.log(res);
      dispatch({
        type: DELETE_REQUIREMENT,
        payload: res,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        dispatch({
          type: CHECKING_ERROR_REQUIREMENTS,
          payload: error.response,
        });
      }
    }
  };

export const resetStatus = (dispatch) => {
  dispatch({
    type: RESET_STATUS,
  });
};
