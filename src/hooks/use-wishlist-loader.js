import { useQuery } from '@apollo/client';

import { getFromLocalStorage } from '../services/local-storage.service';
import getWishlistByUserId from '../pages/wishlist/operations/wishlist.queries';

export default function useWishlistLoader() {
  const user = getFromLocalStorage('accessToken');

  const { loading, error, data } = useQuery(getWishlistByUserId, { skip: !user });

  return {
    loading: !user ? false : loading,
    error: !user ? null : error,
    wishlist: !user ? getFromLocalStorage('wishlist') : data?.getWishlistByUserId
  };
}
