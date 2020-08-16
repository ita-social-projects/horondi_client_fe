import { CHANGE_CURRENCY } from './currency.types';

export const initialState = {
  currency: 0
};

const currencyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case CHANGE_CURRENCY:
    return {
      ...state,
      currency: action.payload
    };

  default: {
    return state;
  }
  }
};

export default currencyReducer;
