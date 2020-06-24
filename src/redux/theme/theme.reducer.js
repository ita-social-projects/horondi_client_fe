const initialState = {
  lightMode: true
};

const themeState = (state = initialState, { type, payload }) => {
  console.log('22');
  switch (type) {
    case 'SET_THEME_MODE':
      return {
        ...state,
        lightMode: payload
      };
    default:
      return state;
  }
};

export default themeState;
