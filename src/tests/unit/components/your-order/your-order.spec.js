import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import {
  mockedCartItemsData,
  mockedProps,
  mockQueryData,
  mockTranslationsKey
} from './your-order.variables';
import YourOrder from '../../../../containers/orders/order/your-order';

jest.mock('../../../../containers/orders/cart/filled-cart/filled-cart.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('../../../../containers/checkout/checkout-form/checkout-form.styles.js', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: () => ({ loading: false, error: null, data: { getProductById: mockQueryData } })
}));

const mockGetTotalPrice = jest.fn(() => '42');

jest.mock('../../../../hooks/use-cart', () => ({
  useCart: () => ({
    cart: mockedCartItemsData,
    cartOperations: { getTotalPrice: mockGetTotalPrice }
  })
}));

describe('<YourOrder /> component tests', () => {
  it('renders list of Cart Items', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      language: 0
    };
    useSelector.mockImplementation(() => userData);

    render(<YourOrder {...mockedProps} />);

    expect(screen.getAllByText(new RegExp(mockTranslationsKey, 'i'))).toHaveLength(2);
    expect(mockGetTotalPrice).toHaveBeenCalled();
    expect(screen.getByRole('list')).toBeTruthy();
  });

  it('should not render <SelfPickup />', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      language: 0
    };
    useSelector.mockImplementation(() => userData);

    render(<YourOrder {...mockedProps} />);

    expect(screen.queryByText(/addressHorondi/i)).toBeNull();
  });
});
