const filterRemoveItems = (filterItem, arrToFilter = []) =>
  arrToFilter.filter((item) => item !== filterItem);
const instate = {
  products: [],
  category: [],
  color: [],
  catalogFilter: '',
  searchTerm: '',
  searchValue: ''
};

const filterReducer = (state = instate, action) => {
  switch (action.type) {
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

export default filterReducer;
