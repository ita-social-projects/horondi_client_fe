import React, { useEffect, useState } from 'react';
import { CART_KEY } from '../configs';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getFromLocalStorage(CART_KEY));

  useEffect(() => {
    setToLocalStorage(CART_KEY, cart);
  }, [cart]);

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
