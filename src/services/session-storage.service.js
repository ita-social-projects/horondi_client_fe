import { HORONDI } from '../configs';

export const clearSessionStorage = () => {
  const horondi = {
    checkoutForm: null,
    deliveryType: null
  };
  sessionStorage.setItem(HORONDI, JSON.stringify(horondi));
};

export const getFromSessionStorage = (name) => {
  const sessionObject = JSON.parse(sessionStorage.getItem(HORONDI));
  if (!sessionObject) {
    return null;
  }
  return sessionObject[name];
};

export const setToSessionStorage = (name, item) => {
  const sessionObject = JSON.parse(sessionStorage.getItem(HORONDI));
  sessionObject[name] = item;
  sessionStorage.setItem(HORONDI, JSON.stringify(sessionObject));
};
