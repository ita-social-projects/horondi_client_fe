import {
  GET_BURGER_MENU_LINKS,
  SET_BURGER_MENU_LINKS,
  SET_BURGER_MENU_LOADING_LINKS
} from './burger-menu.types';

const setBurgerMenu = (newBurgerMenu) => {
  return {
    type: SET_BURGER_MENU_LINKS,
    payload: newBurgerMenu
  };
};

const getBurgerMenu = () => ({
  type: GET_BURGER_MENU_LINKS
});

const setBurgerMenuLoading = (loading) => ({
  type: SET_BURGER_MENU_LOADING_LINKS,
  payload: loading
});

export { setBurgerMenu, getBurgerMenu, setBurgerMenuLoading };
