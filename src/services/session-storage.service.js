export const clearSessionStorage = () => {
  const horondi = {
    checkoutForm: null,
    deliveryType: null
  };
  sessionStorage.setItem('horondi', JSON.stringify(horondi));
};

export const getFromSessionStorage = (name) => {
  const sessionObject = JSON.parse(sessionStorage.getItem('horondi'));
  if (!sessionObject) {
    return null;
  }
  return sessionObject[name];
};

export const setToSessionStorage = (name, item) => {
  const sessionObject = JSON.parse(sessionStorage.getItem('horondi'));
  sessionObject[name] = item;
  sessionStorage.setItem('horondi', JSON.stringify(sessionObject));
};
