import {
  CART_KEY,
  DEFAULT_COUNT_PER_PAGE,
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  HORONDI
} from '../configs';

export const clearLocalStorage = () => {
  const horondi = {
    accessToken: null,
    _id: null,
    wishlist: { products: [] },
    language: DEFAULT_LANGUAGE,
    currency: DEFAULT_CURRENCY,
    cart: [],
    newCart: [],
    theme: 'light',
    countPerPage: DEFAULT_COUNT_PER_PAGE,
    deliveryType: '',
    paymentMethod: '',
    order: null
  };
  localStorage.setItem(HORONDI, JSON.stringify(horondi));
};

export const clearNewCart = () => {
  setToLocalStorage(CART_KEY, []);
};

if (!localStorage.getItem(HORONDI)) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem(HORONDI));
  if (!localObject) {
    return null;
  }
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem(HORONDI));
  localObject[name] = item;
  localStorage.setItem(HORONDI, JSON.stringify(localObject));
};
