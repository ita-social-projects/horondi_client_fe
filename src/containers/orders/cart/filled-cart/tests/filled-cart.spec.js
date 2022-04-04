import React from 'react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilledCart from '../filled-cart';
import {
  itemData,
  items,
  mockPromoCode,
  mockProductFromConstructor
} from './filled-cart.variables';

jest.mock('react-redux');
jest.mock('../filled-cart.styles.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../order/order-table/order-table.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../cart-item/cart-item.styles', () => ({ useStyles: () => ({}) }));

const mockGetTotalPrice = jest.fn(() => '43');
const mockGetCartItem = jest.fn(() => itemData);
const mockGetProductPrice = jest.fn(() => 1100);
const mockGetTotalPricesWithPromoCode = jest.fn(() => '41');
const mockGetProductPriceWithPromoCode = jest.fn(() => 1000);

const mockCartOperations = {
  getTotalPrice: mockGetTotalPrice,
  getCartItem: mockGetCartItem,
  getProductPrice: mockGetProductPrice,
  getTotalPricesWithPromoCode: mockGetTotalPricesWithPromoCode,
  getProductPriceWithPromoCode: mockGetProductPriceWithPromoCode
};

const mocks = [mockPromoCode, mockProductFromConstructor];

describe('Filled cart component tests', () => {
  it('should calculate total price with promo code', async () => {
    useSelector.mockImplementation(() => ({
      cartLoading: false,
      currency: 0
    }));

    render(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FilledCart items={items} cartOperations={mockCartOperations} />
        </MockedProvider>
      </Router>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    const input = document.querySelector('input');
    fireEvent.change(input, { target: { value: 'test' } });
    const button = screen.getByTestId('promoButton');
    fireEvent.click(button);

    expect(mockGetTotalPrice).toHaveBeenCalled();
  });

  it('should render Loader', () => {
    useSelector.mockImplementation(() => ({
      cartLoading: true,
      currency: 0
    }));
    render(
      <Router>
        <MockedProvider mocks={mocks} addTypename={false}>
          <FilledCart items={items} cartOperations={mockCartOperations} />
        </MockedProvider>
      </Router>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
