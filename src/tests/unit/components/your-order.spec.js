import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../components/loader/loader';
import YourOrder from '../../../containers/orders/order/your-order/your-order';
import { mockedCartItemsData, mockedProps } from './your-order.variables';

jest.mock('../../../containers/orders/cart/filled-cart/filled-cart.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux', () => ({
  useSelector: jest.fn()
}));

describe('<YourOrder /> component tests', () => {
  it('renders loader', () => {
    const userData = {
      cartItems: {},
      cartLoading: true
    };
    useSelector.mockImplementation(() => userData);
    const wrapper = shallow(<YourOrder />);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('renders list of Cart Items', () => {
    const userData = {
      cartItems: mockedCartItemsData,
      cartLoading: false
    };
    useSelector.mockImplementation(() => userData);
    render(<YourOrder {...mockedProps} />);
    expect(screen.getByText(/роллтоп/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeTruthy();
  });
});
