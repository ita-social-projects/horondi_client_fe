import { SET_PRODUCT_TO_SEND, CLEAR_PRODUCT_TO_SEND } from './products.types';

export const initialState = {
  productToSend: {
    product: {
      _id: '',
      category: {
        _id: ''
      },
      name: [],
      mainMaterial: {
        color: {
          _id: ''
        }
      },
      bottomMaterial: {
        material: {},
        color: {}
      },
      pattern: {
        _id: ''
      },
      images: {}
    },
    quantity: 1,
    price: [],
    options: {
      size: {
        _id: ''
      }
    },
    allSizes: [],
    sidePocket: false,
    dimensions: {
      weightInKg: null,
      volumeInLiters: null
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
