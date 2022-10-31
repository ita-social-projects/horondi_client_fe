import React, { useEffect, useState } from 'react';
import { CART_KEY } from '../configs';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage(CART_KEY));
  const [promoCode, setPromocode] = useState('');
  const [certificate, setCertificate] = useState('');

  useEffect(() => {
    setToLocalStorage(CART_KEY, cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, promoCode, setPromocode, certificate, setCertificate }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
