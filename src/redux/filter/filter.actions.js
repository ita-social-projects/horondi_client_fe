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

export const setProductsPerPage = (payload) => ({
  type: SET_PRODUCTS_PER_PAGE,
  payload
});
export const setSortByPrice = (payload) => ({
  type: SET_SORT_BY_PRICE,
  payload
});
export const setSortByDate = (payload) => ({
  type: SET_SORT_BY_DATE,
  payload
});
export const setSortByRate = (payload) => ({
  type: SET_SORT_BY_RATE,
  payload
});
export const setSortByPopularity = (payload) => ({
  type: SET_SORT_BY_POPULARITY,
  payload
});
