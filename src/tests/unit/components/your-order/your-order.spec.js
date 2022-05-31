import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockedCartItemsData, mockedProps } from './your-order.variables';
import YourOrder from '../../../../containers/orders/order/your-order';
import { mockProduct } from '../../../../containers/checkout/checkout-form/tests/checkout-form.variables';
import { DollarIcon } from '../../../../images/profile-icons';

const mockGetProductPriceWithPromoCode = jest.fn(() => 900);
const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);
const userData = {
  cartItems: mockedCartItemsData,
  language: 0
};

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

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

useSelector.mockImplementation(() => userData);

describe('YourOrder component tests', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={mockProduct} addTypename={false}>
        <Router>
          <YourOrder {...mockedProps} />
        </Router>
      </MockedProvider>
    );
  });
  it('renders list of Cart Items', () => {
    expect(screen.getByRole('list')).toBeTruthy();
  });

  it('should not render <SelfPickup />', () => {
    expect(screen.queryByText(/addressHorondi/i)).toBeNull();
  });

  it('should calculate price with promoCode', () => {
    expect(mockGetPriceWithCurrency).toHaveBeenCalled();
    expect(mockGetProductPriceWithPromoCode).toHaveBeenCalled();
  });
});
