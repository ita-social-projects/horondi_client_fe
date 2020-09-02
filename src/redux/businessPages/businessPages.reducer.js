import { SET_BUSINESS_PAGE, SET_LOADING } from './businessPages.types';

const initialState = {
  loading: true,
  pages: {
    aboutUs: {},
    contacts: {},
    privacyPolicy: {},
    paymentAndShipping: {}
  }
};

const businessPagesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_BUSINESS_PAGE:
    return {
      ...state,
      pages: {
        ...state.pages,
        [action.payload.key]: action.payload.businessPage
      }
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

export default businessPagesReducer;
