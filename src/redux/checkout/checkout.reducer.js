import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_LOADING,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES,
  SET_DELIVERY_TYPE
} from './checkout.types';

const initialState = {
  loading: false,
  cities: [],
  warehouses: [],
  streets: [],
  price: {},
  deliveryType: ''
};

const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOVAPOSHTA_CITIES:
      return {
        ...state,
        cities: action.payload
      };

    case SET_DELIVERY_TYPE:
      return {
        ...state,
        deliveryType: ''
      };

    case SET_NOVAPOSHTA_PRICES:
      return {
        ...state,
        price: action.payload
      };

    case SET_NOVAPOSHTA_STREETS:
      return {
        ...state,
        streets: action.payload
      };

    case SET_NOVAPOSHTA_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state;
  }
};

export default checkoutReducer;
