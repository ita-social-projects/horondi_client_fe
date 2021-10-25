import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Wishlist from '../wishlist';

jest.mock('../wishlist.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../services/local-storage.service');
jest.mock('../../../hooks/use-wishlist-loader', () => ({
  __esModule: true,
  default: () => ({ loading: false, error: null, wishlist: {} })
}));

const dispatch = jest.fn();
const state = {
  isLightTheme: true,
  language: 0,
  loading: false
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('Wishlist component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<Wishlist />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Wishlist', () => {
    expect(wrapper).toBeDefined();
  });
});
