const categoriesLoaded = (newCategories) => ({
  type: 'CATEGORIES_LOADED',
  payload: newCategories
});

const categoriesRequested = () => ({
  type: 'CATEGORIES_REQUESTED'
});

export { categoriesLoaded, categoriesRequested };
