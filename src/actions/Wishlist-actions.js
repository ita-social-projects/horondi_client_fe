const addToWishlist = (productDescription) => ({
  type: 'ADD_PRODUCT_WISHLIST',
  payload: productDescription
});

const removeFromWishlist = (productName) => ({
  type: 'REMOVE_FROM_WISHLIST',
  payload: productName
});

export { addToWishlist, removeFromWishlist };
