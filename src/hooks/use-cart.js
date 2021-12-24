import { useEffect, useState } from 'react';
import {
  clearNewCart,
  getFromLocalStorage,
  setToLocalStorage
} from '../services/local-storage.service';
import { calcPriceForCart } from '../utils/priceCalculating';
import { CART_KEY } from '../configs';

export const useCart = (user = null) => {
  const [cart, setNewCart] = useState(getFromLocalStorage(CART_KEY) || []);

  useEffect(() => {
    setToLocalStorage(CART_KEY, [...cart]);
  }, [cart]);

  const addToCart = (item) => {
    setNewCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    clearNewCart();
  };

  const getCartItem = (id) => cart.find((cartItem) => cartItem.id === id);

  const removeFromCart = (item) => {
    setNewCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  const isInCart = (productId, sizeId = null) =>
    cart.find(
      (cartItem) =>
        productId === cartItem.productId &&
        (sizeId ? sizeId === cartItem.sizeAndPrice.size._id : true)
    );

  const changeQuantity = (id, count) => {
    setNewCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) el.quantity = count;
        return el;
      })
    );
  };

  const getTotalPrice = (currency = 0) =>
    cart.reduce(
      (acc, item) => acc + calcPriceForCart(item.sizeAndPrice.price[currency].value, item.quantity),
      0
    );

  const changeSize = (id, sizeAndPrice) => {
    setNewCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice = sizeAndPrice;
        }
        return el;
      })
    );
  };

  const changeSizeConstructor = (id, size) => {
    setNewCart((prevCart) =>
      prevCart.map((el) => {
        if (el.id === id) {
          el.sizeAndPrice.size = size;
        }
        return el;
      })
    );
  };

  const cartOperations = {
    addToCart,
    removeFromCart,
    changeQuantity,
    changeSize,
    getTotalPrice,
    getCartItem,
    clearCart,
    changeSizeConstructor
  };

  return {
    isInCart,
    cart,
    cartOperations
  };
};
