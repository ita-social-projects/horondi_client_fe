import {
  SET_WISHLIST,
  GET_WISHLIST,
  RESET_WISHLIST,
  ADD_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST,
  ADD_CART_ITEMS_TO_WISHLIST
} from './wishlist.types';

const setWishlist = (wishlistItems) => ({
  type: SET_WISHLIST,
  payload: wishlistItems
});

const getWishlist = () => ({
  type: GET_WISHLIST
});

const resetWishlist = () => ({
  type: RESET_WISHLIST
});

const addItemToWishlist = (item) => ({
  type: ADD_ITEM_TO_WISHLIST,
  payload: item
});

const removeItemFromWishlist = (itemId) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  payload: itemId
});

const addCartItemsToWishlist = (items) => ({
  type: ADD_CART_ITEMS_TO_WISHLIST,
  payload: items
});

export {
  getWishlist,
  setWishlist,
  resetWishlist,
  addItemToWishlist,
  removeItemFromWishlist,
  addCartItemsToWishlist
};
