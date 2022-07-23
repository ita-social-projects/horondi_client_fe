import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearNewCart,
  getFromLocalStorage,
  setToLocalStorage
} from '../services/local-storage.service';
import { calcPriceForCart, calcPriceWithCertificateForCart } from '../utils/priceCalculating';
import { CART_KEY } from '../configs';
import { setCart } from '../redux/common-store/common.actions';
import { useCurrency } from './use-currency';

export const useCart = (user = null) => {
  const dispatch = useDispatch();
  const { getPriceWithCurrency } = useCurrency();

  const [cart, setNewCart] = useState(getFromLocalStorage(CART_KEY) || []);

  useEffect(() => {
    setToLocalStorage(CART_KEY, [...cart]);
    dispatch(setCart(cart));
  }, [cart, user, dispatch]);

  const addToCart = (item) => {
    setNewCart((prevCart) => [item, ...prevCart]);
  };

  const clearCart = () => {
    clearNewCart();
  };

  const getCartItem = (id) =>
    cart.find((cartItem) => cartItem.id === id || cartItem.productId === id);

  const getTotalPricesWithPromoCode = (promoCode) => {
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const newArr = cart.map((item) => {
      const { price } = item.sizeAndPrice;
      
      const isAllowCategory = categories.find(
        (el) => el.toLowerCase() === item.category.code.toLowerCase()
      );
      if (isAllowCategory) {
        return [getPriceWithCurrency(Math.round(price - (price / 100) * discount)), item.quantity];
        
      }
      return [getPriceWithCurrency(price), item.quantity];
    });
    return newArr.reduce(
      (acc, item) => {
         return acc + calcPriceForCart(item[0], item[1])},
      0
    );
  };

  const getTotalPricesWithCertificate = (certificateData) => {
    const { value } = certificateData.getCertificateByName;

    const newArr = cart.map((item) => {
      const price = getPriceWithCurrency(item.sizeAndPrice.price);
      const priceWithCertificate = price;
      return [priceWithCertificate - value, item.quantity, price];
    });

    return newArr.reduce( 
      (acc, item) => {
        return acc + calcPriceWithCertificateForCart(item[0], item[1], item[2])},
        0
    );
  };

  const getProductPriceWithPromoCode = (id, promoCode) => {
    const product = getCartItem(id);
    const { discount, categories } = promoCode.getPromoCodeByCode;
    const isAllowCategory = categories.find(
      (item) => item.toLowerCase() === product.category.code.toLowerCase()
    );
    const { price } = product.sizeAndPrice;

   if (isAllowCategory) {
      return getPriceWithCurrency(Math.round(price - (price / 100) * discount));
    }

    return getPriceWithCurrency(price);
  };

  const getProductPriceWithCertificate = (id, certificateData) => {
    const product = getCartItem(id);
    const { value } = certificateData.getCertificateByName;
    const price = getPriceWithCurrency(product.sizeAndPrice.price);
    return price - value;
  };

  const getTotalSavePrice = (id, certificateData) => {
    const { value } = certificateData.getCertificateByName;
    if(id) return value;
  };

  const getProductPrice = (id) => getPriceWithCurrency(getCartItem(id).sizeAndPrice.price);

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

  const getTotalPrice = () =>
    cart.reduce(
      (acc, item) =>
        acc + calcPriceForCart(getPriceWithCurrency(item.sizeAndPrice.price), item.quantity),
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
    getProductPriceWithCertificate,
    getTotalPricesWithPromoCode,
    getTotalPricesWithCertificate,
    getProductPrice,
    getTotalSavePrice
  };

  return {
    isInCart,
    cart,
    cartOperations
  };
};
