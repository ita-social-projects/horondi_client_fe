import { SET_HEADER_LINKS } from './header-links.types';

const initialState = {
  linksList: []
};

const businessPagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_HEADER_LINKS:
      return {
        ...state,
        linksList: action.payload
      };
    default:
      return state;
  }
};

export default businessPagesReducer;
