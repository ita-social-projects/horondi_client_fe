import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { getFromLocalStorage, setToLocalStorage } from '../services/local-storage.service';
import { WISHLIST_KEY, USER_TOKENS } from '../configs';
import { deleteProductFromWishlist } from '../pages/wishlist/operations/wishlist.mutations';

export default function useDeleteProductFromWishlistHandler() {
  const user = getFromLocalStorage(USER_TOKENS.ACCESS_TOKEN);

  const [wishlist, setWishlist] = useState(getFromLocalStorage(WISHLIST_KEY));
  const [deleteProductMutation, { error, data, loading }] = useMutation(deleteProductFromWishlist);

  return [
    {
      error: user ? error : null,
      loading: user ? loading : false,
      wishlist: user ? data?.deleteProductFromWishlist.products : wishlist.products
    },
    (product) => {
      if (!user) {
        setToLocalStorage(WISHLIST_KEY, {
          ...wishlist,
          products: wishlist.products.filter(
            (el) => JSON.stringify(el._id) !== JSON.stringify(product._id)
          )
        });

        setWishlist(getFromLocalStorage(WISHLIST_KEY));
      } else deleteProductMutation({ variables: { productId: product._id } });
    }
  ];
}
