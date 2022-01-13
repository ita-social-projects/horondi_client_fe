import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartHeader from '../cart-header';

jest.mock('../cart-header.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

describe('CartHeader', () => {
  it('should consist 1 item in <Badge />', () => {
    const mockStore = {
      cartItems: [{ quantity: 1 }],
      user: {}
    };
    useSelector.mockImplementation(() => mockStore);
    render(
      <BrowserRouter>
        <CartHeader />
      </BrowserRouter>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
