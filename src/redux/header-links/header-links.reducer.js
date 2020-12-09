import { SET_HEADER_LINKS } from './header-links.types';

const initialState = {
  linksList: []
};

export const businessPagesReducer = (state = initialState, action = {}) => {
  if (action.type === SET_HEADER_LINKS) {
    return {
      ...state,
      linksList: action.payload
    };
  } 
  return state;
  
};
