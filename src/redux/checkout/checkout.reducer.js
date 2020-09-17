import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_LOADING
} from './checkout.types';

const initialState = {
  loading: false,
  cities: [],
  warehouses: []
};

const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOVAPOSHTA_CITIES:
      return {
        ...state,
        cities: action.payload
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
