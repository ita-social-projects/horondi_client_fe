import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import WishlistHeader from '../wishlist-header';

jest.mock('../wishlist-header.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('@apollo/client');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => [true, () => null],
  useEffect: (cb) => cb()
}));

jest.mock('react-redux');

describe('Test for the wishlist-header component', () => {
  it('It should render the wishlist-header component', () => {
    const mockStore = {
      wishlistItems: [{ quantity: 1 }],
      user: {}
    };
    useSelector.mockImplementation(() => mockStore);
    render(
      <BrowserRouter>
        <WishlistHeader />
      </BrowserRouter>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
