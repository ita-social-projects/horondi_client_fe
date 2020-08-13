import { SET_CONTACTS, SET_LOADING } from './contacts.types';

const initialState = {
  loading: true,
  contacts: []
};

const contactsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_CONTACTS:
    return {
      ...state,
      contacts: action.payload
    };

  case SET_LOADING:
    return {
      ...state,
      loading: action.payload
    };

  default:
    return state;
  }
};

export default contactsReducer;
