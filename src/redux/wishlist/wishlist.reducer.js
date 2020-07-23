import {
  SET_WISHLIST_ITEMS,
  SET_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST
} from './wishlist.types';

const initialState = {
  list: []
};

const wishlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_WISHLIST_ITEMS:
    return {
      ...state,
      list: payload
    };
  case SET_ITEM_TO_WISHLIST:
    return {
      ...state,
      list: [...state.list, payload]
    };
  case REMOVE_ITEM_FROM_WISHLIST:
    return {
      ...state,
      list: state.list.filter((item) => item.id !== payload)
    };
  default:
    return state;
  }
};

export default wishlistReducer;
