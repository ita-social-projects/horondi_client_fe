import React from 'react';
import { render } from '@testing-library/react';
import Wishlist from '../wishlist';

jest.mock('../../../components/app/app.styles', () => ({ useAppStyles: () => ({}) }));

const mockWishlist = [{ _id: '614cb8', price: '2840' }];
jest.mock('../../../hooks/use-wishlist', () => ({
  useWishlist: () => ({ wishlist: mockWishlist })
}));

const mockFilledWishlist = jest.fn().mockImplementation(() => null);
jest.mock(
  '../filled-wishlist',
  () =>
    ({ items }) =>
      mockFilledWishlist(items)
);

const mockToast = jest.fn().mockImplementation(() => null);
jest.mock('../../../containers/toast', () => () => mockToast());

describe('Wishlist component tests', () => {
  beforeEach(() => {
    render(<Wishlist />);
  });

  it('Should render Wishlist', () => {
    expect(mockFilledWishlist).toHaveBeenCalledWith(mockWishlist);
    expect(mockToast).toHaveBeenCalled();
  });
});
