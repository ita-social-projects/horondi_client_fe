import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Cart from '../../../../pages/cart/cart';

jest.mock('react-redux');

jest.mock(
  '../../../../containers/orders/cart/filled-cart',
  () =>
    function Filled() {
      return <div>Filled</div>;
    }
);

jest.mock(
  '../../../../containers/orders/cart/empty-cart',
  () =>
    function Empty() {
      return <div>Empty</div>;
    }
);

const storage = {
  cartItems: [],
  cartLoading: false
};

useSelector.mockImplementation(() => storage);

beforeEach(() => {
  storage.cartItems = [];
  storage.cartLoading = false;
});

describe('Cart page tests', () => {
  it('should render empty cart', () => {
    const { getByText } = render(<Cart />);
    expect(getByText(/Empty/)).toBeInTheDocument();
  });

  it('should render loader', () => {
    storage.cartLoading = true;
    const { container } = render(<Cart />);
    expect(container.firstChild).toHaveClass('makeStyles-wrapper-3 makeStyles-wrapper-6');
  });

  it('should render filled cart', () => {
    storage.cartItems.push('sds');
    const { getByText } = render(<Cart />);
    expect(getByText(/Filled/)).toBeInTheDocument();
  });
});
