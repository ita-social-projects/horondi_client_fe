const filterRemoveItems = (arrToFilter = [], filterItem) =>
  arrToFilter.filter((item) => item !== filterItem);
const instate = {
  brand: [],
  products: [],
  category: [],
  color: [],
  catalogFilter: '',
  searchTerm: '',
  searchValue: ''
};

const filter = (state = instate, action) => {
  switch (action.type) {
    case 'FILTER_ADD_BRAND': {
      return {
        ...state,
        brand: [...state.brand, action.payload]
      };
    }
    case 'SET_CATALOG_FILTER': {
      return {
        ...state,
        catalogFilter: action.payload
      };
    }

    case 'CLEAR_FILTER': {
      return {
        ...state,
        brand: [],
        category: [],
        color: [],
        searchTerm: '',
        searchValue: ''
      };
    }

    case 'FILTER_REMOVE_BRAND': {
      return {
        ...state,
        brand: filterRemoveItems(state.brand, action.payload)
      };
    }
    case 'FILTER_REMOVE_ALL_BRANDS': {
      return {
        ...state,
        brand: []
      };
    }
    case 'FILTER_REMOVE_ALL_COLORS': {
      return {
        ...state,
        brand: []
      };
    }
    case 'FILTER_ADD_CATEGORIES': {
      return {
        ...state,
        category: [...state.category, action.payload]
      };
    }

    case 'FILTER_ADD_CATEGORY': {
      return {
        ...state,
        category: [action.payload]
      };
    }
    case 'FILTER_REMOVE_CATEGORY': {
      return {
        ...state,
        category: filterRemoveItems(state.category, action.payload)
      };
    }
    case 'FILTER_REMOVE_ALL_CATEGORIES': {
      return {
        ...state,
        category: []
      };
    }
    case 'FILTER_ADD_COLOR': {
      return { ...state, color: [...state.color, action.payload] };
    }
    case 'FILTER_REMOVE_COLOR': {
      return {
        ...state,
        color: filterRemoveItems(state.color, action.payload)
      };
    }

    case 'FILTER_BY_NAME': {
      return {
        ...state,
        searchTerm: action.payload
      };
    }
    case 'CLEAR_FIELD': {
      return {
        ...state,
        searchValue: action.payload
      };
    }
    default:
      return state;
  }
};

export default filter;
