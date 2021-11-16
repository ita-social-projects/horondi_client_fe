import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderTable from '../order-table';

jest.mock('../order-table.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
const testUseSelector = (lang) => {
  useSelector.mockImplementation(() => ({
    language: lang
  }));
};
let wrapper;

const props = {
  currency: 0,
  calcPrice: 100,
  cartLoading: false,
  cartQuantityLoading: false,
  items: [{ product: { product_id: 'some id' }, price: 10 }],
  user: {}
};
describe('Order table component tests', () => {
  it('should match snapshot', () => {
    testUseSelector(0);
    wrapper = shallow(<OrderTable {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
