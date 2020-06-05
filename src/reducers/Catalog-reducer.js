const initialState = {
  catalogs: [],
  catalog: '',
  loading: true
};

const catalogsList = (state = initialState, action) => {
  switch (action.type) {
    case 'CATALOGS_REQUESTED':
      return {
        catalogs: state.catalogs,
        catalog: state.catalog,
        loading: true
      };
    case 'CATALOGS_LOADED':
      return {
        catalogs: action.payload,
        catalog: state.catalog,
        loading: false
      };
    case 'CATALOG_LOADED':
      return {
        ...state,
        catalog: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default catalogsList;
