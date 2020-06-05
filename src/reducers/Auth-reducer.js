const initialState = {
  userLogged: false,
  userLoading: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOGGED':
      return {
        ...state,
        userLoading: false,
        userLogged: action.payload
      };
    case 'SET_USER_LOADING':
      return {
        ...state,
        userLoading: true
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    default:
      return { ...state };
  }
};

export default authReducer;
