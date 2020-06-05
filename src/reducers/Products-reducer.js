const initialState = {
  products: [],
  product: {},
  currency: 1,
  currencyIcon: '€',
  loading: true,
  currentPage: 0,
  postsPerPage: 15,
  pagesCount: 1,
  sortByPrice: 1,
  sortByRate: 0,
  sizes: []
};

const productsList = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_LOADING_START':
      return {
        ...state,
        loading: true
      };

    case 'PRODUCTS_LOADING_STOP':
      return {
        ...state,
        loading: false
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        loading: false
      };

    case 'CURRENCY_CHANGE':
      return {
        ...state,
        currency: action.payload,
        loading: false
      };
    case 'CURRENCY_ICON_CHANGE':
      return {
        ...state,
        currencyIcon: action.payload,
        loading: false
      };
    case 'ADD_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    case 'ADD_POSTS_PER_PAGE':
      return {
        ...state,
        postsPerPage: action.payload
      };
    case 'ADD_PAGES_COUNT':
      return {
        ...state,
        pagesCount: action.payload
      };
    case 'SORT_BY_PRICE':
      return {
        ...state,
        sortByPrice: action.payload
      };
    case 'SORT_BY_RATE':
      return {
        ...state,
        sortByRate: action.payload
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case 'SET_SIZES':
      return {
        ...state,
        sizes: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default productsList;
