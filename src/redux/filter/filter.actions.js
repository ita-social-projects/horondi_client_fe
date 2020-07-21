import {
  SET_CURRENT_PAGE,
  FILTER_PRODUCTS,
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

export const filterProducts = (payload) => ({
  type: FILTER_PRODUCTS,
  payload
});
