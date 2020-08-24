import {
  SET_PRODUCT,
  SET_CURRENT_PAGE,
  SET_ALL_PRODUCTS,
  SET_ALL_FILTER_DATA,
  SET_PRODUCTS_PER_PAGE,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_DATE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  SET_PRODUCTS_LOADING,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_COLORS_FILTER,
  SET_PATTERNS_FILTER,
  SET_SEARCH,
  SET_PAGES_COUNT,
  SET_HOT_ITEM_FILTER,
  SET_PRODUCT_LOADING,
  SET_COMMENT,
  SET_RATE,
  SET_COMMENTS_LOADING,
  SET_UPDATING_COMMENT
} from './products.types';

export const initialState = {
  productLoading: false,
  loading: true,
  currentPage: 0,
  productsPerPage: 9,
  sortByPrice: 0,
  sortByRate: 0,
  sortByPopularity: -1,
  filters: {
    colorsFilter: [],
    patternsFilter: [],
    categoryFilter: null,
    priceFilter: [0, 99999999],
    searchFilter: '',
    isHotItemFilter: false
  },
  filterData: [],
  product: null,
  products: [],
  pagesCount: 1,
  commentsLoading: false,
  updatingComment: null
};
const setSort = ({
  sortByPrice = 0,
  sortByRate = 0,
  sortByPopularity = 0
}) => ({
  sortByPrice,
  sortByRate,
  sortByPopularity
});

const productsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_ALL_PRODUCTS:
    return {
      ...state,
      products: action.payload
    };
  case SET_ALL_FILTER_DATA:
    return {
      ...state,
      filterData: action.payload
    };
  case SET_CURRENT_PAGE:
    return {
      ...state,
      currentPage: action.payload - 1
    };
  case SET_PRODUCTS_PER_PAGE:
    return {
      ...state,
      productsPerPage: action.payload
    };
  case SET_PATTERNS_FILTER:
    return {
      ...state,
      filters: {
        ...state.filters,
        patternsFilter: action.payload
      }
    };
  case SET_COLORS_FILTER:
    return {
      ...state,
      filters: {
        ...state.filters,
        colorsFilter: action.payload
      }
    };
  case SET_PRICE_FILTER:
    return {
      ...state,
      filters: {
        ...state.filters,
        priceFilter: action.payload
      }
    };
  case SET_CATEGORY_FILTER:
    return {
      ...state,
      filters: {
        ...state.filters,
        categoryFilter: action.payload
      }
    };
  case SET_HOT_ITEM_FILTER:
    return {
      ...state,
      filters: {
        ...state.filters,
        isHotItemFilter: action.payload
      }
    };
  case SET_SEARCH:
    return {
      ...state,
      filters: {
        ...state.filters,
        searchFilter: action.payload
      }
    };
  case SET_SORT_BY_PRICE:
    return {
      ...state,
      ...setSort({ sortByPrice: action.payload })
    };
  case SET_SORT_BY_DATE:
    return {
      ...state,
      ...setSort({ sortByDate: action.payload })
    };
  case SET_SORT_BY_RATE:
    return {
      ...state,
      ...setSort({ sortByRate: action.payload })
    };
  case SET_SORT_BY_POPULARITY:
    return {
      ...state,
      ...setSort({ sortByPopularity: action.payload })
    };
  case SET_PRODUCTS_LOADING:
    return {
      ...state,
      loading: action.payload
    };
  case SET_PAGES_COUNT:
    return {
      ...state,
      pagesCount: action.payload
    };
  case SET_PRODUCT:
    return {
      ...state,
      product: action.payload
    };
  case SET_PRODUCT_LOADING:
    return {
      ...state,
      productLoading: action.payload
    };
  case SET_RATE:
    return {
      ...state,
      product: {
        ...state.product,
        rate: action.payload.rate,
        userRates: action.payload.userRates
      }
    };
  case SET_COMMENT:
    return {
      ...state,
      product: {
        ...state.product,
        comments: action.payload
      }
    };
  case SET_COMMENTS_LOADING:
    return {
      ...state,
      commentsLoading: action.payload
    };
  case SET_UPDATING_COMMENT:
    return {
      ...state,
      updatingComment: action.payload
    };
  default:
    return state;
  }
};

export default productsReducer;
