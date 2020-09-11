import {
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES
} from './checkout.types';

const initialState = {
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

    default:
      return state;
  }
};

export default checkoutReducer;
