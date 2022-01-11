import {
  SET_PRODUCTS_FOR_SEARCH_BAR,
  SET_SEARCH_BAR_VISIBILITY,
  GET_PRODUCTS_FOR_SEARCH_BAR,
  SET_SEARCH_BAR_LOADING
} from './search-bar.types';

export const setProductsForSearchBar = (payload) => ({
  type: SET_PRODUCTS_FOR_SEARCH_BAR,
  payload
});

export const setSearchBarVisibility = (payload) => ({
  type: SET_SEARCH_BAR_VISIBILITY,
  payload
});

export const getProductsForSearchBar = (payload) => ({
  type: GET_PRODUCTS_FOR_SEARCH_BAR,
  payload
});

export const setSearchBarLoading = (payload) => ({
  type: SET_SEARCH_BAR_LOADING,
  payload
});
