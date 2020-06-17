const categoriesLoaded = (newCategories) => ({
  type: 'CATEGORIES_LOADED',
  payload: newCategories
});

const categoriesRequested = () => ({
  type: 'CATEGORIES_REQUESTED'
});

const categoryLoaded = (newCategory) => ({
  type: 'CATEGORY_LOADED',
  payload: newCategory
});

export { categoriesLoaded, categoryLoaded, categoriesRequested };
