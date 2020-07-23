import {
  SET_CURRENT_PAGE,
  FILTER_PRODUCTS,
  SET_ALL_FILTER_PRODUCTS,
  SET_PRODUCTS_PER_PAGE,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_DATE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY
} from './filter.types';

const initialState = {
  currentPage: 0,
  productsPerPage: 9,
  sortByPrice: 0,
  sortByDate: 0,
  sortByRate: 0,
  sortByPopularity: 1,
  products: []
};
const setSort = ({
  sortByDate = 0,
  sortByPrice = 0,
  sortByRate = 0,
  sortByPopularity = 0
}) => ({
  sortByDate,
  sortByPrice,
  sortByRate,
  sortByPopularity
});

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
      currentPage: action.payload - 1
    };
  case SET_PRODUCTS_PER_PAGE:
    return {
      ...state,
      productsPerPage: action.payload
    };
  case SET_SORT_BY_PRICE:
    return {
      ...state,
      ...setSort({ sortByPrice: action.payload })
    };
  case SET_SORT_BY_DATE:
    return {
      ...state,
      ...setSort({ sortByDate: action.payload })
    };
  case SET_SORT_BY_RATE:
    return {
      ...state,
      ...setSort({ sortByRate: action.payload })
    };
  case SET_SORT_BY_POPULARITY:
    return {
      ...state,
      ...setSort({ sortByPopularity: action.payload })
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
