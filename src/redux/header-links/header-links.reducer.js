import { SET_HEADER_LINKS } from './header-links.types';

const initialState = {
  linksList: []
};

const businessPagesReducer = (state = initialState, action = {}) => {
  if (action.type === SET_HEADER_LINKS) {
    return {
      ...state,
      linksList: action.payload
    };
  } else {
    return state;
  }
};

export default businessPagesReducer;
