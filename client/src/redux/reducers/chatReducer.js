import {
  GET_ALL_CHATS,
  GET_ALL_MESSAGES_OF_A_CONVERSATION,
  NEW_REQUEST,
  SEND_MESSAGE,
} from "../constants/AllConstants";

const initialState = {
  chats: [],
  all_messages_of_a_conversation: [],
  isLoading: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_ALL_CHATS: {
      return {
        ...state,
        isLoading: false,
        chats: action.payload,
      };
    }

    case GET_ALL_MESSAGES_OF_A_CONVERSATION: {
      return {
        ...state,
        isLoading: false,
        all_messages_of_a_conversation: action.payload,
      };
    }

    case SEND_MESSAGE: {
      return {
        ...state,
        isLoading: false,
        all_messages_of_a_conversation: [
          ...state.all_messages_of_a_conversation,
          action.payload,
        ],
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;
