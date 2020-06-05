const setUserLogged = (newStatus) => ({
  type: 'SET_USER_LOGGED',
  payload: newStatus
});

const setUser = (newUser) => ({
  type: 'SET_USER',
  payload: newUser
});

const setUserLoading = () => ({
  type: 'SET_USER_LOADING'
});

export { setUserLogged, setUserLoading, setUser };
