import {
  SET_PRODUCT,
  GET_PRODUCT,
  SET_ALL_PRODUCTS,
  GET_ALL_FILTERS,
  SET_CURRENT_PAGE,
  SET_ALL_FILTER_DATA,
  SET_PRODUCTS_PER_PAGE,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_DATE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  GET_FILTRED_PRODUCTS,
  SET_PRODUCTS_LOADING,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_COLORS_FILTER,
  SET_PATTERNS_FILTER,
  SET_SEARCH,
  SET_PAGES_COUNT,
  SET_HOT_ITEM_FILTER,
  SET_PRODUCT_LOADING,
  SET_PRODUCT_TO_SEND,
  CLEAR_PRODUCT_TO_SEND
} from './products.types';

export const setProduct = (item) => ({
  type: SET_PRODUCT,
  payload: item
});

export const getProduct = (id) => ({
  type: GET_PRODUCT,
  payload: id
});

export const setAllFilterData = (payload) => ({
  type: SET_ALL_FILTER_DATA,
  payload
});
export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
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
export const getFiltredProducts = (payload) => ({
  type: GET_FILTRED_PRODUCTS,
  payload
});
export const setProductsLoading = (loading) => ({
  type: SET_PRODUCTS_LOADING,
  payload: loading
});
export const setCategoryFilter = (payload) => ({
  type: SET_CATEGORY_FILTER,
  payload
});
export const setPriceFilter = (payload) => ({
  type: SET_PRICE_FILTER,
  payload
});
export const setColorsFilter = (payload) => ({
  type: SET_COLORS_FILTER,
  payload
});
export const setHotItemFilter = (payload) => ({
  type: SET_HOT_ITEM_FILTER,
  payload
});
export const setPatternsFilter = (payload) => ({
  type: SET_PATTERNS_FILTER,
  payload
});
export const setSearchFilter = (payload) => ({
  type: SET_SEARCH,
  payload
});
export const setPagesCount = (payload) => ({
  type: SET_PAGES_COUNT,
  payload
});
export const setAllProducts = (payload) => ({
  type: SET_ALL_PRODUCTS,
  payload
});
export const getAllFilters = () => ({
  type: GET_ALL_FILTERS
});
export const setProductLoading = (payload) => ({
  type: SET_PRODUCT_LOADING,
  payload
});
export const setProductToSend = (payload) => ({
  type: SET_PRODUCT_TO_SEND,
  payload
});
export const clearProductToSend = () => ({
  type: CLEAR_PRODUCT_TO_SEND
});
