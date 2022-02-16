import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ALL_CHATS,
  GET_ALL_MESSAGES_OF_A_CONVERSATION,
  NEW_REQUEST,
  SEND_MESSAGE,
} from "../constants/AllConstants";

export const getAllChats = (data) => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });

  try {
    const res = await axios.get(
      "http://localhost:3000/api/v1/chats/get-chats",
      {
        headers: {
          authorization: `Bearer ${data.token}`,
        },
        data,
      }
    );
    // console.log(res);
    dispatch({
      type: GET_ALL_CHATS,
      payload: res.data.Chats,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMessages = (data) => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });

  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/chats/get-messages?room_id=${data.room_id}`,
      {
        headers: {
          authorization: `Bearer ${data.token}`,
        },
      }
    );
    console.log(res);
    dispatch({
      type: GET_ALL_MESSAGES_OF_A_CONVERSATION,
      payload: res.data.messages,
    });
  } catch (err) {
    console.log(err.response);
    console.log(err);
  }
};

export const sendMessage = (data) => async (dispatch) => {
  dispatch({
    type: NEW_REQUEST,
    payload: true,
  });

  try {
    var token = "";
    for (var key of data.entries()) {
      if (key[0] === "token") {
        token = key[1];
      }
    }
    const res = await axios.post(
      `http://localhost:3000/api/v1/chats/send-message`,
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: SEND_MESSAGE,
      payload: res.data.newMessage,
    });
  } catch (err) {
    console.log(err.response);
    console.log(err);
  }
};
