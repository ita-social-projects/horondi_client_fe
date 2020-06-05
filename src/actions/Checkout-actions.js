const setOrderToStore = (order) => ({
  type: 'SET_ORDER',
  payload: order
});

const clearOrderStore = () => ({
  type: 'CLEAR_ORDER'
});

export { setOrderToStore, clearOrderStore };
