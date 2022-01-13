import { SET_PRODUCT_TO_SEND, CLEAR_PRODUCT_TO_SEND } from './products.types';

export const initialState = {
  productToSend: {
    product: {
      _id: ''
    },
    quantity: 1,
    price: [],
    options: {
      size: {
        _id: ''
      }
    }
  }
};

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCT_TO_SEND:
      return {
        ...state,
        productToSend: {
          ...state.productToSend,
          ...action.payload
        }
      };
    case CLEAR_PRODUCT_TO_SEND:
      return {
        ...state,
        productToSend: initialState.productToSend
      };
    default:
      return state;
  }
};

export default productsReducer;
