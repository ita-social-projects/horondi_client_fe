import React, { useEffect, useState } from 'react';
import { WISHLIST_KEY } from '../configs';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';

export const WishlistContext = React.createContext();

const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(getFromLocalStorage(WISHLIST_KEY));

  useEffect(() => {
    setToLocalStorage(WISHLIST_KEY, wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
