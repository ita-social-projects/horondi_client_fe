import { categoriesLoaded, categoriesRequested } from './Categories-actions';

import {
  setProducts,
  productsLoadingStart,
  currencyChange,
  addCurrentPage,
  addPostsPerPage,
  addPagesCount,
  addSortByPrice,
  addSortByRate,
  setProduct,
  sizesLoaded,
  currencyIconChange,
  productsLoadingStop
} from './Products-actions';

import {
  addToCart,
  increaseToCart,
  decreaseFromCart,
  removeFromCart,
  clearCart,
  setCart
} from './Cart-action';
import { addToWishlist, removeFromWishlist } from './Wishlist-actions';
import { setOrderToStore, clearOrderStore } from './Checkout-actions';

import {
  catalogsLoaded,
  catalogsRequested,
  catalogLoaded
} from './Catalogs-actions';

import {
  filterAddBrand,
  filterAddCategories,
  filterAddColor,
  filterRemoveCategory,
  filterRemoveAllCategories,
  filterRemoveAllBrands,
  filterRemoveColor,
  filterRemoveBrand,
  filterByName,
  setSearchValue,
  setCatalogFilter,
  filterRemoveAllColors,
  filterAddCategory,
  clearFilter
} from './Filter-actions';

import { setUserLogged, setUserLoading, setUser } from './Auth-actions';

import { setShowSnackbar, setSnackbarText } from './Snackbar--actions';
import { storeSetNews } from './News-actions';
import { setComments, removeComments } from './comments-action';

export {
  categoriesRequested,
  categoriesLoaded,
  catalogLoaded,
  catalogsLoaded,
  catalogsRequested,
  setProducts,
  productsLoadingStart,
  productsLoadingStop,
  currencyChange,
  filterAddBrand,
  filterAddCategories,
  filterAddColor,
  filterRemoveBrand,
  filterRemoveAllBrands,
  filterRemoveCategory,
  filterRemoveAllCategories,
  filterRemoveColor,
  setCatalogFilter,
  addCurrentPage,
  addPostsPerPage,
  addPagesCount,
  addSortByPrice,
  addSortByRate,
  filterByName,
  setProduct,
  sizesLoaded,
  setSearchValue,
  addToCart,
  increaseToCart,
  decreaseFromCart,
  removeFromCart,
  addToWishlist,
  setUserLogged,
  setUserLoading,
  setUser,
  currencyIconChange,
  removeFromWishlist,
  setShowSnackbar,
  setSnackbarText,
  filterRemoveAllColors,
  filterAddCategory,
  clearFilter,
  clearCart,
  setOrderToStore,
  clearOrderStore,
  setCart,
  storeSetNews,
  setComments,
  removeComments
};
