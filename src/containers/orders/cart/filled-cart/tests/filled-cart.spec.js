import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../../components/loader/loader';
import FilledCart from '../filled-cart';
import OrderTable from '../../../order/order-table';

jest.mock('react-redux');
jest.mock('../filled-cart.styles.js', () => ({ useStyles: () => ({}) }));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
const mockUseSelector = (loading = false) => {
  useSelector.mockImplementation(() => ({
    language: 0,
    cartLoading: loading,
    currency: 0,
    userData: {},
    cartList: [],
    cartQuantityLoading: false,
    cartUserTotalPrice: 100,
    user: {
      userData: null
    }
  }));
};
const mockGetTotalPrice = jest.fn(() => '42');
const mockCartOperations = { getTotalPrice: mockGetTotalPrice };

let wrapper;
const items = [{ price: [{ currency: 'ua', value: 100 }] }];

describe('Filled cart component tests', () => {
  beforeEach(() => {
    mockUseSelector();
  });

  it('Calls method for getting total price', () => {
    wrapper = shallow(<FilledCart items={items} cartOperations={mockCartOperations} />);

    expect(wrapper.find(OrderTable)).toBeDefined();
  });

  it('should find loader', () => {
    mockUseSelector(true);
    wrapper = shallow(<FilledCart items={items} cartOperations={mockCartOperations} />);
    expect(wrapper.exists(Loader)).toBe(true);
  });
});
