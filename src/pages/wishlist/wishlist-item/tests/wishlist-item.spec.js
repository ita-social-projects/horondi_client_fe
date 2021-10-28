import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishlistItem from '../wishlist-item';

jest.mock('../wishlist-item.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');
jest.mock('../../../../hooks/use-wishlist-loader', () => ({
  __esModule: true,
  default: () => ({ loading: false, error: null, wishlist: {} })
}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true]
}));
jest.mock('../../../../context/theme-context', () => ({}));

const dispatch = jest.fn();
const state = {
  currency: 0,
  userData: null
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;
const props = {
  item: {
    sizes: [{ size: { available: true }, price: [{ value: 10 }, { value: 20 }] }],
    images: { primary: { thumbnail: '' } },
    name: [{ value: '' }, { value: '' }]
  },
  setModalItem: () => null,
  setModalVisibility: () => null
};
describe('WishlistItem component tests', () => {
  it('Should render WishlistItem', () => {
    wrapper = shallow(<WishlistItem {...props} />);

    expect(wrapper).toBeDefined();
  });
});
