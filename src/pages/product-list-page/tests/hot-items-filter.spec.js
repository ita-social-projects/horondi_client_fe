import React from 'react';
import { useDispatch } from 'react-redux';
import HotItemFilter from '../product-list-filter/hot-item-filter/hot-item-filter';

const dispatch = jest.fn();
jest.mock('react-redux');
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);

describe('HotItemFilter component tests', () => {
  it('Should render HotItemFilter', () => {
    const component = shallow(<HotItemFilter />);
    expect(component).toBeDefined();
  });
});
