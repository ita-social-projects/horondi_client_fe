import {
  CATEGORIES_LOADED,
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

const watchCategoriesLoad = () => ({
  type: CATEGORIES_LOADED
});

export { setCategories, setCategory, watchCategoriesLoad };
