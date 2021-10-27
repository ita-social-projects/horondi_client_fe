import {
  SET_FONDY_DATA,
  SET_DELIVERY_LOADING,
  SET_UKRPOST_REGIONS,
  SET_UKRPOST_DISTRICTS,
  SET_UKRPOST_CITIES,
  SET_UKRPOST_POSTOFFICES
} from './checkout.types';

const initialState = {
  deliveryLoading: false,
  ukrPoshtaCities: [],
  ukrPoshtaRegions: [],
  ukrPoshtaDistricts: [],
  ukrPoshtaPostOffices: []
};

export const checkoutReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_UKRPOST_REGIONS:
      return {
        ...state,
        ukrPoshtaRegions: action.payload
      };
    case SET_UKRPOST_DISTRICTS:
      return {
        ...state,
        ukrPoshtaDistricts: action.payload
      };
    case SET_UKRPOST_CITIES:
      return {
        ...state,
        ukrPoshtaCities: action.payload
      };
    case SET_UKRPOST_POSTOFFICES:
      return {
        ...state,
        ukrPoshtaPostOffices: action.payload
      };

    case SET_FONDY_DATA:
      return {
        ...state,
        fondyData: action.payload
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
