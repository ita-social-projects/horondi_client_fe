const initialState = {
  showSnackbar: false,
  snackbarText: ''
};
const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOW':
      return {
        ...state,
        showSnackbar: action.payload
      };
    case 'SET_TEXT':
      return {
        ...state,
        snackbarText: action.payload
      };
    default:
      return state;
  }
};
export default snackbarReducer;
