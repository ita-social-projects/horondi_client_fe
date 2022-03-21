import { CHANGE_LANGUAGE } from './language.types';

export const initialState = {
  language: 'ua'
};

const languageReducer = (state = initialState, action = {}) => {
  if (action.type === CHANGE_LANGUAGE) {
    return {
      ...state,
      language: action.payload
    };
  }
  return state;
};

export default languageReducer;
