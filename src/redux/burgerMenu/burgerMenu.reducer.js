import { SET_BURGER_MENU, SET_BURGER_MENU_LOADING } from './burgerMenu.types';

const initialState = {
  categories: [],
  loading: true
};

const burgerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BURGER_MENU:
      return {
        ...state,
        categories: action.payload
      };
    case SET_BURGER_MENU_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default burgerMenuReducer;
