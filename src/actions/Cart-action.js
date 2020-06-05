const addToCart = (productName) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productName
});

const setCart = (newCart) => ({
  type: 'SET_CART',
  payload: newCart
});

const increaseToCart = (productName) => ({
  type: 'INCREASE_TO_CART',
  payload: productName
});

const decreaseFromCart = (productName) => ({
  type: 'DECREASE_TO_CART',
  payload: productName
});

const removeFromCart = (productName) => ({
  type: 'REMOVE_FROM_CART',
  payload: productName
});

const clearCart = () => ({
  type: 'CLEAR_CART'
});

export {
  addToCart,
  setCart,
  increaseToCart,
  decreaseFromCart,
  removeFromCart,
  clearCart
};
