const filterAddBrand = (brand) => ({
  type: 'FILTER_ADD_BRAND',
  payload: brand
});

const setCatalogFilter = (catalog) => ({
  type: 'SET_CATALOG_FILTER',
  payload: catalog
});
const filterAddCategories = (category) => ({
  type: 'FILTER_ADD_CATEGORIES',
  payload: category
});

const filterAddCategory = (category) => ({
  type: 'FILTER_ADD_CATEGORY',
  payload: category
});

const clearFilter = () => ({
  type: 'CLEAR_FILTER'
});

const filterAddColor = (color) => ({
  type: 'FILTER_ADD_COLOR',
  payload: color
});
const filterRemoveColor = (color) => ({
  type: 'FILTER_REMOVE_COLOR',
  payload: color
});
const filterRemoveBrand = (brand) => ({
  type: 'FILTER_REMOVE_BRAND',
  payload: brand
});
const filterRemoveAllBrands = () => ({
  type: 'FILTER_REMOVE_ALL_BRANDS'
});
const filterRemoveCategory = (category) => ({
  type: 'FILTER_REMOVE_CATEGORY',
  payload: category
});
const filterRemoveAllCategories = (catalog) => ({
  type: 'FILTER_REMOVE_ALL_CATEGORIES',
  payload: catalog
});
const filterRemoveAllColors = (catalog) => ({
  type: 'FILTER_REMOVE_ALL_COLORS',
  payload: catalog
});

const filterByName = (newSearchTerm) => ({
  type: 'FILTER_BY_NAME',
  payload: newSearchTerm
});
const setSearchValue = (newSearchValue) => ({
  type: 'CLEAR_FIELD',
  payload: newSearchValue
});

export {
  filterAddBrand,
  filterAddCategories,
  filterAddColor,
  filterRemoveBrand,
  filterRemoveAllBrands,
  filterRemoveCategory,
  filterRemoveAllCategories,
  filterRemoveAllColors,
  filterRemoveColor,
  filterByName,
  setSearchValue,
  setCatalogFilter,
  filterAddCategory,
  clearFilter
};
