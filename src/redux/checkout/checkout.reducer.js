import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_PRICES,
  SET_FONDY_DATA,
  SET_DELIVERY_LOADING
} from './checkout.types';

const initialState = {
  deliveryLoading: false,
  cities: [],
  warehouses: [],
  price: {}
};

export const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOVAPOSHTA_CITIES:
      return {
        ...state,
        cities: action.payload
      };

    case SET_FONDY_DATA:
      return {
        ...state,
        fondyData: action.payload
      };
    case SET_NOVAPOSHTA_PRICES:
      return {
        ...state,
        price: action.payload
      };

    case SET_NOVAPOSHTA_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload
      };
    case SET_DELIVERY_LOADING:
      return {
        ...state,
        deliveryLoading: action.payload
      };

    default:
      return state;
  }
};
