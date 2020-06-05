const initialState = {
  categories: [],
  category: {},
  loading: true
};

const categoriesList = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default categoriesList;
