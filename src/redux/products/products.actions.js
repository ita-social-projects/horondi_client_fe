import {
  SET_ALL_PRODUCTS,
  SET_LOADING,
  GET_ALL_PRODUCTS
} from './products.types';

export const setAllProducts = (payload) => ({
  type: SET_ALL_PRODUCTS,
  payload
});
export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS
});
export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});
