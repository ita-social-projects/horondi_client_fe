import axios from 'axios';
import {
  getFromLocalStorage,
  setToLocalStorage
} from '../services/localStoreService';
import { config } from '../configs';
import { setUser } from '../actions';

const serverUrl = config.app;
const initialState = { cartNumbers: 0, cartProducts: [] };

const userId = getFromLocalStorage('userId');
const productCollection = getFromLocalStorage('productsCollection');
const localCartNumbers = getFromLocalStorage('cartNumbers');
const accessToken = getFromLocalStorage('accessToken');

const saveCart = async (userId, data, token) => {
  axios({
    method: 'PUT',
    url: `${serverUrl}users/cart/${userId}`,
    data,
    headers: { 'x-auth-token': token }
  });
};

const setInitial = async () => {
  if (userId) {
    const res = await axios({
      method: 'GET',
      url: `${serverUrl}users/${userId}`,
      headers: { 'x-auth-token': accessToken }
    });
    const { cart } = res.data.user;
    setUser(res.data.user);
    if (!cart) {
      saveCart(userId, { cartNumbers: 0, cartProducts: [] });
      return;
    }
    initialState.cartNumbers = cart.cartNumbers;
    initialState.cartProducts = cart.cartProducts;
    return;
  }

  if (productCollection && localCartNumbers) {
    initialState.cartNumbers = localCartNumbers;
    initialState.cartProducts = productCollection;
  }
};

setInitial(accessToken);

const addToCart = (state, payload) => {
  const newProducts = [...state.cartProducts];
  const foundProduct = newProducts.find(
    (item) =>
      payload.propetries._id === item.propetries._id &&
      payload.propetries._size === item.propetries._size
  );
  if (foundProduct) {
    foundProduct.quantity++;
  } else {
    newProducts.unshift({ ...payload, quantity: 1 });
  }

  if (userId) {
    const cart = {
      cartNumbers: state.cartNumbers + 1,
      cartProducts: newProducts
    };
    saveCart(userId, cart, accessToken);
  }
  setToLocalStorage('productsCollection', newProducts);
  setToLocalStorage('cartNumbers', state.cartNumbers + 1);

  return {
    ...state,
    cartNumbers: state.cartNumbers + 1,
    cartProducts: newProducts
  };
};

const increaseToCart = (state, payload) => {
  const newIncreaseProducts = [...state.cartProducts];
  const foundIncreaseItems = newIncreaseProducts.find(
    (item) => payload.propetries._id === item.propetries._id
  );
  foundIncreaseItems.quantity += 1;

  if (userId) {
    const cart = {
      cartNumbers: state.cartNumbers + 1,
      cartProducts: newIncreaseProducts
    };
    saveCart(userId, cart, accessToken);
  }
  setToLocalStorage('productsCollection', newIncreaseProducts);
  setToLocalStorage('cartNumbers', state.cartNumbers + 1);

  return {
    ...state,
    cartProducts: newIncreaseProducts,
    cartNumbers: state.cartNumbers + 1
  };
};

const decreaseToCart = (state, payload) => {
  const new_products = [...state.cartProducts];
  const foundItem = new_products.find(
    (item) => payload.propetries._id === item.propetries._id
  );

  if (foundItem.quantity === 1) {
    const new_items = state.cartProducts.filter(
      (item) => payload.propetries._id !== item.propetries._id
    );

    if (userId) {
      const cart = {
        cartNumbers: state.cartNumbers - 1,
        cartProducts: new_items
      };
      saveCart(userId, cart, accessToken);
    }
    setToLocalStorage('productsCollection', new_items);
    setToLocalStorage('cartNumbers', state.cartNumbers - 1);

    return {
      ...state,
      cartNumbers: state.cartNumbers - 1,
      cartProducts: new_items
    };
  }
  foundItem.quantity -= 1;
  if (userId) {
    const cart = {
      cartNumbers: state.cartNumbers - 1,
      cartProducts: new_products
    };
    saveCart(userId, cart, accessToken);
  }
  setToLocalStorage('productsCollection', new_products);
  setToLocalStorage('cartNumbers', state.cartNumbers - 1);

  return {
    ...state,
    cartProducts: new_products,
    cartNumbers: state.cartNumbers - 1
  };
};

const removeFromCart = (state, payload) => {
  const newItems = state.cartProducts.filter(
    (item) => payload.propetries._id !== item.propetries._id
  );
  const itemToRemove = state.cartProducts.find(
    (item) => payload.propetries._id === item.propetries._id
  );
  let quantity = 0;
  if (itemToRemove) {
    setToLocalStorage('productsCollection', newItems);
    quantity = itemToRemove.quantity;
    setToLocalStorage('cartNumbers', state.cartNumbers - quantity);

    if (userId) {
      const cart = {
        cartNumbers: state.cartNumbers - quantity,
        cartProducts: newItems
      };
      saveCart(userId, cart, accessToken);
    }

    return {
      ...state,
      cartNumbers: state.cartNumbers - quantity,
      cartProducts: newItems
    };
  }
  setToLocalStorage('productsCollection', newItems);
  setToLocalStorage('cartNumbers', state.cartNumbers);

  if (userId) {
    const cart = { cartNumbers: state.cartNumbers, cartProducts: newItems };
    saveCart(userId, cart, accessToken);
  }

  return {
    ...state,
    cartNumbers: 0,
    cartProducts: newItems
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return addToCart(state, action.payload);

    case 'INCREASE_TO_CART':
      return increaseToCart(state, action.payload);

    case 'DECREASE_TO_CART':
      return decreaseToCart(state, action.payload);

    case 'REMOVE_FROM_CART':
      return removeFromCart(state, action.payload);

    case 'SET_CART':
      return {
        cartProducts: action.payload.cartProducts,
        cartNumbers: action.payload.cartNumbers
      };
    case 'CLEAR_CART':
      if (userId) {
        const cart = { cartNumbers: 0, cartProducts: [] };
        saveCart(userId, cart, accessToken);
      }

      return {
        cartProducts: [],
        cartNumbers: 0
      };

    default:
      return state;
  }
};
