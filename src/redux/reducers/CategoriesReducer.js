const initialState = {
  categories: [],
  category: '',
  loading: true
};

const CategoriesReducer = (state = initialState, action) => {
  console.log(state.category)
  switch (action.type) {
    case 'CATEGORIES_REQUESTED':
      return {
        categories: state.categories,
        category: state.category,
        loading: true
      };
    case 'CATEGORIES_LOADED':
      return {
        categories: action.payload,
        category: state.category,
        loading: false
      };
    case 'CATEGORY_LOADED':
      return {
        ...state,
        category: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
