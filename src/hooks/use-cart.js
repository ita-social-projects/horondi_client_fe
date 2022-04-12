import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearNewCart,
  getFromLocalStorage,
  setToLocalStorage
} from '../services/local-storage.service';
import { calcPriceForCart } from '../utils/priceCalculating';
import { CART_KEY } from '../configs';
import { setCart } from '../redux/common-store/common.actions';

export const useCart = (user = null) => {
  const dispatch = useDispatch();

  const [cart, setNewCart] = useState(getFromLocalStorage(CART_KEY) || []);

  useEffect(() => {
    setToLocalStorage(CART_KEY, [...cart]);
    dispatch(setCart(cart));
  }, [cart, user, dispatch]);

  const addToCart = (item) => {
    setNewCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    clearNewCart();
  };

  const getCartItem = (id) =>
    cart.find((cartItem) => cartItem.id === id || cartItem.productId === id);

  const getTotalPricesWithPromoCode = (currency, promoCode) => {
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const newArr = cart.map((item) => {
      const price = item.sizeAndPrice.price[currency].value;

      const isAllowCategory = categories.find(
        (el) => el.toLowerCase() === item.category.code.toLowerCase()
      );
      if (isAllowCategory) {
        return [Math.round(price - (price / 100) * discount), item.quantity];
      }
      return [Math.round(price), item.quantity];
    });
    return newArr.reduce((acc, item) => acc + calcPriceForCart(item[0], item[1]), 0);
  };

  const getProductPriceWithPromoCode = (id, currency, promoCode) => {
    const product = getCartItem(id);
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const isAllowCategory = categories.find(
      (item) => item.toLowerCase() === product.category.code.toLowerCase()
    );
    const price = product.sizeAndPrice.price[currency].value;

    if (isAllowCategory) {
      return Math.round(price - (price / 100) * discount);
    }

    return price;
  };

  const getProductPrice = (id, currency) =>
    getCartItem(id).sizeAndPrice.price * currency.exchangeRate;

  const setCartItem = (id, item) => {
    const newCart = cart.map((cartItem) => (cartItem.id === id ? item : cartItem));
    setNewCart(newCart);
  };

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

  const getTotalPrice = (currency) =>
    cart.reduce(
      (acc, item) =>
        acc + calcPriceForCart(item.sizeAndPrice.price * currency.exchangeRate, item.quantity),
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
    setCartItem,
    removeFromCart,
    changeQuantity,
    changeSize,
    getTotalPrice,
    getCartItem,
    clearCart,
    changeSizeConstructor,
    getProductPriceWithPromoCode,
    getTotalPricesWithPromoCode,
    getProductPrice
  };

  return {
    isInCart,
    cart,
    cartOperations
  };
};
