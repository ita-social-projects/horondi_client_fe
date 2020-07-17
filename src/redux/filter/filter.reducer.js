import {
  SET_CURRENT_PAGE,
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
  sortByPopularity: 1
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
  default:
    return state;
  }
};
export default filterReducer;
