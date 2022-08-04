import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMutation } from '@apollo/client';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { WISHLIST_KEY } from '../configs';
import { setNewWishlist } from '../redux/common-store/common.actions';
import {
  addProductToWishlist,
  deleteProductFromWishlist
} from '../pages/wishlist/operations/wishlist.mutations';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const [wishlist, setWishlist] = useState(getFromLocalStorage(WISHLIST_KEY));
  const [addProductMutation] = useMutation(addProductToWishlist);
  const [deleteProductMutation] = useMutation(deleteProductFromWishlist);
  const user = useSelector(({ User }) => User.userData);

  useEffect(() => {
    setToLocalStorage(WISHLIST_KEY, wishlist);
    dispatch(setNewWishlist(wishlist));
  }, [wishlist, dispatch]);

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
