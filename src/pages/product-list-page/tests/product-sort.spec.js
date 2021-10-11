import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSort from '../product-sort/product-sort';

const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);

useSelector.mockImplementation(() => ({
  language: 0
}));

describe('ProductSort component tests', () => {
  it('Should render ProductSort', () => {
    const component = shallow(<ProductSort />);
    expect(component).toBeDefined();
  });
});
