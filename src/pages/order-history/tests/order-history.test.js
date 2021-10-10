import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import OrderHistory from '../order-history';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../order-history/order-history.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

const dispatch = jest.fn();
const state = {
  orders: 0,
  loading: false,
  currentPage: '',
  countPerPage: ''
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

describe('OrderHistory component', () => {
  it('should render', () => {
    shallow(<OrderHistory />);
  });
});
