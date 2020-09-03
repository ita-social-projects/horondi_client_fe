import { CHANGE_LANGUAGE } from './language.types';
import { DEFAULT_LANGUAGE } from '../../configs';

export const initialState = {
  language: DEFAULT_LANGUAGE
};

const languageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_LANGUAGE:
    return {
      ...state,
      language: action.payload
    };
  default:
    return state;
  }
};

export default languageReducer;
