import { useEffect, useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { calcPriceForCart } from '../utils/priceCalculating';

export const useCart = (userId = false) => {
  const [cart, setCart] = useState([...getFromLocalStorage('test')]);

  useEffect(() => {
    setToLocalStorage('test', [...cart]);
    getTotalPrice();
  }, [addToCart, changeQuantity, removeFromCart, changeSize]);

  function addToCart(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function getCartItem(itemId) {
    return cart.find((cartItem) => cartItem.productId === itemId);
  }

  function removeFromCart(item) {
    setCart((prevCart) =>
      prevCart.filter(
        (cartItem) => !(cartItem.productId === item.productId && cartItem.size === item.size)
      )
    );
  }

  function isInCart(item) {
    return cart.find((cartItem) => item === cartItem.productId);
  }

  function changeQuantity(item, count) {
    setCart((prevCart) => [
      ...prevCart.map((el) => {
        if (el.productId === item.productId) el.quantity = count;
        return el;
      })
    ]);
  }

  function getTotalPrice(currency = 0) {
    return cart.reduce(
      (acc, item) => acc + calcPriceForCart(item.price[currency].value, item.quantity),
      0
    );
  }

  function changeSize(item, size) {
    setCart((prevCart) => [
      ...prevCart.map((el) => {
        if (el.productId === item.productId) {
          el.size = size;
        }
        return el;
      })
    ]);
  }

  return {
    addToCart,
    removeFromCart,
    isInCart,
    cart,
    getCartItem,
    changeQuantity,
    getTotalPrice,
    changeSize
  };
};
