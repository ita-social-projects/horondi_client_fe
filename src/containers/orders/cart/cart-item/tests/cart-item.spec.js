import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../cart-item';
import { props, item } from './cart-item.variables';

jest.mock('react-redux');
const dispatch = jest.fn();

function testSelection(loading) {
  useSelector.mockImplementation(() => ({
    language: 0,
    currency: 0,
    list: [],
    loading,
    quantityLoading: loading,
    totalPrice: 100,
    userData: {}
  }));
}

useDispatch.mockImplementation(() => dispatch);

let component;

describe('Filled cart component tests', () => {
  it('should render CartItem ', () => {
    testSelection(false);
    component = shallow(<CartItem {...props} />);
    expect(component).toBeDefined();
  });

  it('should cover other branches', () => {
    testSelection(true);
    item.product.bottomMaterial = { material: { name: [{ value: 'value' }] } };
    component = shallow(<CartItem {...props} user={null} cartQuantityLoading />);
  });
});
