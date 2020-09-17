import { SET_CHAT_LOADING, SET_MESSAGE_STATE } from './chat.types';

export const initialState = {
  loading: false,
  mailID: false
};

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MESSAGE_STATE:
      return {
        ...state,
        mailID: action.payload
      };
    case SET_CHAT_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default chatReducer;
