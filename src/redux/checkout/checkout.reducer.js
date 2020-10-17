import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_LOADING,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES
} from './checkout.types';

const initialState = {
  loading: false,
  cities: [],
  warehouses: [],
  streets: [],
  price: {}
};

const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOVAPOSHTA_CITIES:
      return {
        ...state,
        cities: action.payload
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
