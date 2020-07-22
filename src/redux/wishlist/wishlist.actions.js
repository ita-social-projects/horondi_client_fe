import {
  SET_WISHLIST_ITEMS,
  SET_ITEM_TO_WISHLIST,
  REMOVE_ITEM_FROM_WISHLIST
} from './wishlist.types';

const setWishlistItems = (wishlistItems) => ({
  type: SET_WISHLIST_ITEMS,
  payload: wishlistItems
});

const setItemToWishlist = (item) => ({
  type: SET_ITEM_TO_WISHLIST,
  payload: item
});

const removeItemFromWishlist = (itemId) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  payload: itemId
});

export { setWishlistItems, setItemToWishlist, removeItemFromWishlist };
