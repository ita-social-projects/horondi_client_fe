import {
  SET_CURRENT_PAGE,
  FILTER_PRODUCTS,
  SET_ALL_FILTER_PRODUCTS
} from './filter.types';

const initialState = {
  currentPage: 1,
  products: []
};

const filterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_FILTER_PRODUCTS:
    return {
      ...state,
      products: action.payload
    };
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload
    };
  case FILTER_PRODUCTS:
    const filteredValues = state.products
      .filter((product) =>
        action.payload.search.length
          ? product.name[0].value
            .toLowerCase()
            .includes(action.payload.search.toLowerCase()) ||
              product.name[1].value
                .toLowerCase()
                .includes(action.payload.search.toLowerCase())
          : product
      )
      .filter(
        (product) =>
          product.basePrice >= action.payload.price.bottomPrice &&
            product.basePrice <= action.payload.price.topPrice
      )
      .filter((product) =>
        action.payload.colors.length
          ? action.payload.colors.some((color) => color === product.color)
          : product
      )
      .filter((product) =>
        action.payload.patterns.length
          ? action.payload.patterns.some(
            (pattern) =>
              pattern.name[1].value === product.pattern.name[1].value
          )
          : product
      );
    console.log(filteredValues);
    return {
      ...state,
      products: filteredValues
    };
  default:
    return state;
  }
};
export default filterReducer;
