import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import WishlistHeader from '../wishlist-header';

jest.mock('../../../hooks/use-wishlist', () => ({
  useWishlist: () => ({
    wishlist: [{ _id: '614cb8' }, { _id: '61af5' }]
  })
}));

describe('Test for the wishlist-header component', () => {
  it('It should render the wishlist-header component', () => {
    render(
      <BrowserRouter>
        <WishlistHeader />
      </BrowserRouter>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
