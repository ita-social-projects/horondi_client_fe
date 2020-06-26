import {
  GET_CATEGORIES,
  SET_CATEGORY,
  SET_CATEGORIES
} from './categories.types';

const setCategories = (newCategories) => ({
  type: SET_CATEGORIES,
  payload: newCategories
});

const setCategory = (newCategory) => ({
  type: SET_CATEGORY,
  payload: newCategory
});

const getCategories = () => ({
  type: GET_CATEGORIES
});

export { setCategories, setCategory, getCategories };
