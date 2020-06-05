import {
  getFromLocalStorage,
  setToLocalStorage
} from '../services/localStoreService';

const productCollection = getFromLocalStorage('wishlist_collection');

const initialState = {
  products: productCollection || []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_WISHLIST':
      const newProducts = state.products;
      const foundProduct = newProducts.find(
        (value) => action.payload.id === value.id
      );
      if (!foundProduct) {
        newProducts.unshift(action.payload);
      }
      setToLocalStorage('wishlist_collection', newProducts);
      return {
        ...state,
        products: newProducts
      };
    case 'REMOVE_FROM_WISHLIST':
      const newItems = state.products.filter(
        (item) => action.payload.id !== item.id
      );
      setToLocalStorage('wishlist_collection', newItems);
      return {
        ...state,
        products: newItems
      };

    default:
      return state;
  }
};
