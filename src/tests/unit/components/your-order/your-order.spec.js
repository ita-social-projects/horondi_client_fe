import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockedCartItemsData, mockedProps, mockPromoCode } from './your-order.variables';
import YourOrder from '../../../../containers/orders/order/your-order';

const mockGetProductPriceWithPromoCode = jest.fn(() => 900);

jest.mock('../../../../containers/orders/cart/filled-cart/filled-cart.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../containers/checkout/checkout-form/checkout-form.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

jest.mock('../../../../hooks/use-cart', () => ({
  useCart: () => ({
    cart: mockedCartItemsData,
    cartOperations: { getProductPriceWithPromoCode: mockGetProductPriceWithPromoCode }
  })
}));

describe('<YourOrder /> component tests', () => {
  it('renders list of Cart Items', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      language: 0
    };
    useSelector.mockImplementation(() => userData);

    render(
      <MockedProvider>
        <Router>
          <YourOrder {...mockedProps} />
        </Router>
      </MockedProvider>
    );
    expect(screen.getByRole('list')).toBeTruthy();
  });

  it('should not render <SelfPickup />', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      language: 0
    };
    useSelector.mockImplementation(() => userData);

    render(
      <MockedProvider>
        <Router>
          <YourOrder {...mockedProps} />
        </Router>
      </MockedProvider>
    );

    expect(screen.queryByText(/addressHorondi/i)).toBeNull();
  });

  it('should calculate price with promoCode', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      language: 0
    };
    useSelector.mockImplementation(() => userData);

    render(
      <MockedProvider>
        <Router>
          <YourOrder {...mockedProps} promoCode={mockPromoCode} />
        </Router>
      </MockedProvider>
    );

    expect(mockGetProductPriceWithPromoCode).toHaveBeenCalled();
  });
});
