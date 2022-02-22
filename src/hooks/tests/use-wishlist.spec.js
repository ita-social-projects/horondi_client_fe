import { useDispatch } from 'react-redux';
import { renderHook, act } from '@testing-library/react-hooks';
import { mockItem } from './use-wishlist.variables';
import { useWishlist } from '../use-wishlist';

const dispatch = jest.fn();

jest.mock('react-redux');

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => null,
    {
      loading: true,
      error: null,
      data: { addProductToWishlist: { products: [{ _id: 1 }] } }
    }
  ]
}));

useDispatch.mockImplementation(() => dispatch);

describe('use-wishlist tests', () => {
  let wrap;
  let res;
  beforeEach(() => {
    wrap = renderHook(useWishlist);
  });

  it('should add item to wishlist', () => {
    act(() => {
      wrap.result.current.wishlistOperations.addToWishlist(mockItem);
    });

    expect(wrap.result.current.wishlist).toContain(mockItem);
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
  });
});
