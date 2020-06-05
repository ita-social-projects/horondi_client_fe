const setShowSnackbar = (data) => ({
  type: 'SET_SHOW',
  payload: data
});
const setSnackbarText = (data) => ({
  type: 'SET_TEXT',
  payload: data
});

export { setShowSnackbar, setSnackbarText };
