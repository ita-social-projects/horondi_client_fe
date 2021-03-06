import {
  SET_BUSINESS_PAGE,
  SET_BUSINESS_PAGE_LOADING
} from './business-pages.types';

const initialState = {
  loading: false,
  pages: {
    aboutUs: {},
    contacts: {},
    materials: {},
    privacyPolicy: {},
    paymentAndShipping: {}
  }
};

export const businessPagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_BUSINESS_PAGE:
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.key]: action.payload.businessPage
      }
    };
  case SET_BUSINESS_PAGE_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  default:
    return state;
  }
};
