export const clearLocalStorage = () => {
  const nChoice = {
    accessToken: null,
    refreshToken: null,
    userId: null,
    wishlist_collection: null,
    products_collection: null,
    cart_numbers: null
  };
  localStorage.setItem('nChoice', JSON.stringify(nChoice));
};

if (!localStorage.getItem('nChoice')) {
  clearLocalStorage();
}

export const getFromLocalStorage = (name) => {
  const localObject = JSON.parse(localStorage.getItem('nChoice'));
  return localObject[name];
};

export const setToLocalStorage = (name, item) => {
  const localObject = JSON.parse(localStorage.getItem('nChoice'));
  localObject[name] = item;
  localStorage.setItem('nChoice', JSON.stringify(localObject));
};
