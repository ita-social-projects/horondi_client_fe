import {
  SET_CURRENT_PAGE,
  FILTER_BY_PRICE,
  SET_ALL_FILTER_PRODUCTS
} from './filter.types';

export const setAllFilterProducts = (payload) => ({
  type: SET_ALL_FILTER_PRODUCTS,
  payload
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
});

export const filterByPrice = (payload) => ({
  type: FILTER_BY_PRICE,
  payload
});
