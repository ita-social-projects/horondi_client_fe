import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { mockItem } from './use-wishlist.variables';
import { useWishlist } from '../use-wishlist';
import WishlistContextProvider from '../../context/wishlist-context';

const wrapper = ({ children }) => <WishlistContextProvider>{children}</WishlistContextProvider>;

const mockMutation = jest.fn();
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    mockMutation,
    {
      loading: true,
      error: null,
      data: { addProductToWishlist: { products: [{ _id: 1 }] } }
    }
  ]
}));

jest.mock('react-redux', () => ({
  useSelector: () => true
}));

describe('use-wishlist tests', () => {
  let wrap;
  let res;
  beforeEach(() => {
    wrap = renderHook(() => useWishlist(), { wrapper });
  });

  it('should add item to wishlist', () => {
    act(() => {
      wrap.result.current.wishlistOperations.addToWishlist(mockItem);
    });

    expect(wrap.result.current.wishlist).toContain(mockItem);
    expect(mockMutation).toHaveBeenCalledTimes(1);
  });

  it('should check is item in wishlist', () => {
    act(() => {
      res = wrap.result.current.isInWishlist(mockItem);
    });

    expect(res).toEqual(mockItem);
  });

  it('should remove item from wishlist', () => {
    act(() => {
      wrap.result.current.wishlistOperations.removeFromWishlist(mockItem);
    });

    expect(wrap.result.current.wishlist).toHaveLength(0);
    expect(mockMutation).toHaveBeenCalledTimes(1);
  });
});
