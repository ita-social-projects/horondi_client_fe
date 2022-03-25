import { useMutation } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';

import useWishlistLoader from './use-wishlist-loader';
import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { addProductToWishlist } from '../pages/wishlist/operations/wishlist.mutations';
import errorOrLoadingHandler from '../utils/errorOrLoadingHandler';
import { WISHLIST_KEY, USER_TOKENS } from '../configs';

export default function useAddProductToWishlistHandler(product) {
  const [isInWishlist, toggleIsInWishlist] = useState(false);
  const user = getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN);
  const { wishlist } = useWishlistLoader();
  const firstlyChecked = useRef(false);
  const [addProductMutation, { data, error }] = useMutation(addProductToWishlist);

  const checkIsInWishlist = (list, productItem) => {
    list.products.find((el) => JSON.stringify(el._id) === JSON.stringify(productItem._id))
      ? toggleIsInWishlist(true)
      : toggleIsInWishlist(false);

    firstlyChecked.current = true;
  };

  error && errorOrLoadingHandler(error, false);

  useEffect(() => {
    data && checkIsInWishlist(data.addProductToWishlist, product);
  }, [data, product]);
  useEffect(() => {
    !firstlyChecked.current && wishlist.products?.length && checkIsInWishlist(wishlist, product);
  }, [wishlist, product]);

  return [
    isInWishlist,
    () => {
      const { products } = wishlist;

      if (!user)
        if (products.find((el) => JSON.stringify(el._id) === JSON.stringify(product._id))) {
          wishlist.products = products.filter(
            (item) => JSON.stringify(item._id) !== JSON.stringify(product._id)
          );

          setToLocalStorage(WISHLIST_KEY, wishlist);

          toggleIsInWishlist(false);
        } else {
          wishlist.products.push(product);

          setToLocalStorage(WISHLIST_KEY, wishlist);

          toggleIsInWishlist(true);
        }

      if (user) {
        addProductMutation({ variables: { productId: product._id } });
      }
    }
  ];
}
