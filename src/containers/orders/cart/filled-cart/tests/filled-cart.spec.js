import React from 'react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilledCart from '../filled-cart';
import { itemData, items, mockPromoCode } from './filled-cart.variables';

jest.mock('react-redux');
jest.mock('../filled-cart.styles.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../order/order-table/order-table.styles', () => ({ useStyles: () => ({}) }));
jest.mock('../../cart-item/cart-item.styles', () => ({ useStyles: () => ({}) }));

const mockChangeQuantity = jest.fn();
const mockChangeSizeConstructor = jest.fn();
const mockGetCartItem = jest.fn(() => itemData);
const mockChangeSize = jest.fn();
const mockGetTotalPrice = jest.fn(() => '42');
const mockGetTotalPricesWithPromoCode = jest.fn(() => '41');
const mockGetProductPriceWithPromoCode = jest.fn(() => 1000);
const mockGetProductPrice = jest.fn(() => 1100);
const mockCartOperations = {
  getTotalPrice: mockGetTotalPrice,
  getTotalPricesWithPromoCode: mockGetTotalPricesWithPromoCode,
  changeQuantity: mockChangeQuantity,
  getCartItem: mockGetCartItem,
  changeSize: mockChangeSize,
  changeSizeConstructor: mockChangeSizeConstructor,
  getProductPriceWithPromoCode: mockGetProductPriceWithPromoCode,
  getProductPrice: mockGetProductPrice
};

describe('Filled cart component tests', () => {
  it('should calculate total price with promo code', () => {
    useSelector.mockImplementation(() => ({
      cartLoading: false,
      currency: 0
    }));
    render(
      <Router>
        <MockedProvider mocks={mockPromoCode} addTypename={false}>
          <FilledCart items={items} cartOperations={mockCartOperations} />
        </MockedProvider>
      </Router>
    );
    const button = screen.getByTestId('promoButton');
    fireEvent.click(button);

    expect(mockGetTotalPricesWithPromoCode).toHaveBeenCalled();
  });

  it('should render Loader', () => {
    useSelector.mockImplementation(() => ({
      cartLoading: true,
      currency: 0
    }));
    render(
      <Router>
        <MockedProvider mocks={mockPromoCode} addTypename={false}>
          <FilledCart items={items} cartOperations={mockCartOperations} />
        </MockedProvider>
      </Router>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
