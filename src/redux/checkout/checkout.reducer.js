import { SET_NOVAPOSHTA_CITIES } from './checkout.types';

const initialState = {
  cities: []
};

const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NOVAPOSHTA_CITIES:
      return {
        ...state,
        cities: action.payload
      };

    default:
      return state;
  }
};

export default checkoutReducer;
