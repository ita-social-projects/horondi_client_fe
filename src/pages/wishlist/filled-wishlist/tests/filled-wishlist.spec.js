import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import FilledWishlist from '../filled-wishlist';
import WishlistItem from '../../wishlist-item/wishlist-item';
import items from './mockedItems';

jest.mock('connected-react-router', () => ({
  push: jest.fn()
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [{}],
  useEffect: (cb) => cb(),
  useState: (value) => [value, () => null]
}));
jest.mock('../../../../context/theme-context', () => ({}));
jest.mock('../../../../hooks/use-delete-product-from-wishlist-handler', () => ({
  __esModule: true,
  default: () => [{ error: null, loading: false, wishlist: {} }, () => null]
}));
jest.mock('../filled-wishlist.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../services/local-storage.service');

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [
    () => null,
    {
      loading: true,
      error: null,
      data: { addProductToWishlist: { products: [{ _id: 1 }] } }
    }
  ]
}));

jest.mock('../../../../hooks/use-wishlist', () => ({
  useWishlist: () => ({
    wishlist: [{ _id: '614cb8' }, { _id: '61af5' }],
    wishlistOperations: {}
  })
}));

const state = {
  language: 1,
  currency: 1
};
const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('Wishlist component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<FilledWishlist items={items} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render filled-wishlist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should contain item', () => {
    expect(wrapper.exists(WishlistItem)).toBe(true);
  });
});
