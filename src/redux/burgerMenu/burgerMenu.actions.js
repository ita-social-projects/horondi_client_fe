import {
  GET_BURGER_MENU,
  SET_BURGER_MENU,
  SET_BURGER_MENU_LOADING
} from './burgerMenu.types';

const setBurgerMenu = (newBurgerMenu) => {
  console.log(newBurgerMenu);
  return {
    type: SET_BURGER_MENU,
    payload: newBurgerMenu
  };
};

const getBurgerMenu = () => ({
  type: GET_BURGER_MENU
});

const setBurgerMenuLoading = (loading) => ({
  type: SET_BURGER_MENU_LOADING,
  payload: loading
});

export { setBurgerMenu, getBurgerMenu, setBurgerMenuLoading };
