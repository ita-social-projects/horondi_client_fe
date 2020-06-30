import { CHANGE_LANGUAGE } from './language.types';

const initialState = {
  language: 0
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default languageReducer;
