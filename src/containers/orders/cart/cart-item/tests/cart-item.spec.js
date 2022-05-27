import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import CartItem from '../cart-item';
import { props, mockProduct, constructor, itemData } from './cart-item.variables';
import { DollarIcon } from '../../../../../images/profile-icons';

jest.mock('react-redux');
jest.mock('../cart-item.styles', () => ({ useStyles: () => ({}) }));

const mockChangeQuantity = jest.fn();
const mockChangeSizeConstructor = jest.fn();
const mockGetCartItem = jest.fn(() => itemData);
const mockChangeSize = jest.fn();
const mockGetProductPriceWithPromoCode = jest.fn(() => 1000);
const mockGetProductPrice = jest.fn(() => 1100);
const mockGetPriceWithCurrency = jest.fn(() => 200);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

const mockCartOperations = {
  changeQuantity: mockChangeQuantity,
  getCartItem: mockGetCartItem,
  changeSize: mockChangeSize,
  changeSizeConstructor: mockChangeSizeConstructor,
  getProductPriceWithPromoCode: mockGetProductPriceWithPromoCode,
  getProductPrice: mockGetProductPrice
};

jest.mock('../../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('Cart item component tests', () => {
  it('should calculate price with promoCode', async () => {
    render(
      <MockedProvider mocks={mockProduct} addTypename={false}>
        <Router>
          <CartItem {...props} cartOperations={mockCartOperations} />
        </Router>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockGetProductPriceWithPromoCode).toHaveBeenCalled();
  });

  it('should calculate price without promoCode', async () => {
    render(
      <MockedProvider mocks={mockProduct} addTypename={false}>
        <Router>
          <CartItem
            {...props}
            item={constructor}
            promoCode={null}
            cartOperations={mockCartOperations}
          />
        </Router>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(mockGetProductPrice).toHaveBeenCalled();
  });
  it('should increment product quantity', async () => {
    render(
      <MockedProvider mocks={mockProduct} addTypename={false}>
        <Router>
          <CartItem {...props} cartOperations={mockCartOperations} />
        </Router>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));

    fireEvent.click(screen.getByTestId('increment'));
    expect(document.querySelector('#filled-basic')).toHaveAttribute('value', '2');

    fireEvent.click(screen.getByTestId('decrement'));
    expect(document.querySelector('#filled-basic')).toHaveAttribute('value', '1');
  });
});
