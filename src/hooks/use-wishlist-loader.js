import { useQuery } from '@apollo/client';

import { getFromLocalStorage } from '../services/local-storage.service';
import { getWishlistByUserId } from '../pages/wishlist/operations/wishlist.queries';

export default function useWishlistLoader() {
  const user = getFromLocalStorage('accessToken');
  const userWishlist = (data) =>
    data?.getWishlistByUserId.products ? data.getWishlistByUserId : { products: [] };

  const {
    loading,
    error,
    data: wishlist
  } = useQuery(getWishlistByUserId, {
    skip: !user,
    fetchPolicy: 'no-cache'
  });

  return {
    loading: !user ? false : loading,
    error: !user ? null : error,
    wishlist: !user ? getFromLocalStorage('wishlist') : userWishlist(wishlist)
  };
}
