import {
  SET_CURRENT_PAGE,
  SET_ALL_FILTER_PRODUCTS,
  SET_PRODUCTS_PER_PAGE,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_DATE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  SET_LOADING,
  SET_CATEGORY
} from './filter.types';

const initialState = {
  loading: true,
  currentPage: 0,
  productsPerPage: 9,
  sortByPrice: 0,
  isHotItem: true,
  sortByRate: 0,
  sortByPopularity: -1,
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
  case SET_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  case SET_CATEGORY:
    return {
      ...state,
      filteredCategory: action.payload
    };
  default:
    return state;
  }
};
export default filterReducer;
