import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartHeader from '../cart-header';

jest.mock('../cart-header.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

const mockDispatch = jest.fn();
useDispatch.mockReturnValue(mockDispatch);

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
  it('after render component should NOT call dispatch', () => {
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
    expect(mockDispatch).not.toHaveBeenCalled();
  });
  it('after render component should call dispatch', () => {
    const mockStore = {
      cartItems: [{ quantity: 1 }],
      user: null
    };
    useSelector.mockImplementation(() => mockStore);
    render(
      <BrowserRouter>
        <CartHeader />
      </BrowserRouter>
    );
    expect(mockDispatch).toHaveBeenCalled();
  });
});
