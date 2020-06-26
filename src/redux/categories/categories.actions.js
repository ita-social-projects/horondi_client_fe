import { GET_CATEGORIES, SET_CATEGORIES } from './categories.types';

const setCategories = (newCategories) => ({
  type: SET_CATEGORIES,
  payload: newCategories
});

const getCategories = () => ({
  type: GET_CATEGORIES
});

export { setCategories, getCategories };
