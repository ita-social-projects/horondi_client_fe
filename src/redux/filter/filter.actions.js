import { SET_CURRENT_PAGE, SET_PRODUCTS_PER_PAGE } from './filter.types';

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
});
export const setProductsPerPage = (payload) => ({
  type: SET_PRODUCTS_PER_PAGE,
  payload
});
