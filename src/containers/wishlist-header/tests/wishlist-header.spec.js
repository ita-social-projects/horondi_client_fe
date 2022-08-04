import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import WishlistHeader from '../wishlist-header';

jest.mock('react-redux', () => ({
  useDispatch: () => () => null,
  useSelector: () => 2
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
