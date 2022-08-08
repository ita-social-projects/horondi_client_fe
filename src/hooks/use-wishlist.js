import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { getFromLocalStorage } from '../services/local-storage.service';
import { WISHLIST_KEY } from '../configs';
import {
  addProductToWishlist,
  deleteProductFromWishlist
} from '../pages/wishlist/operations/wishlist.mutations';

import { WishlistContext } from '../context/wishlist-context';

export const useWishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const [addProductMutation] = useMutation(addProductToWishlist);
  const [deleteProductMutation] = useMutation(deleteProductFromWishlist);
  const user = useSelector(({ User }) => User.userData);

  useEffect(() => {
    setWishlist(getFromLocalStorage(WISHLIST_KEY));
  }, [user, setWishlist]);

  const isInWishlist = (product) =>
    wishlist.find((wishlistItem) => wishlistItem._id === product._id);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
    user && addProductMutation({ variables: { productId: item._id } });
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem._id !== item._id)
    );
    user && deleteProductMutation({ variables: { productId: item._id } });
  };

  const wishlistOperations = {
    addToWishlist,
    removeFromWishlist
  };

  return { isInWishlist, wishlist, wishlistOperations };
};
