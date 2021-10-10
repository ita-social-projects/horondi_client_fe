import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductListItem from '../product-list-item/product-list-item';

const dispatch = jest.fn();
const product = {
  _id: '605658df158e2fdb53498442',
  availableCount: 0,
  basePrice: [],
  category: {},
  images: { primary: { large: '' } },
  isHotItem: true,
  mainMaterial: {},
  model: {},
  name: {
    0: { value: '' }
  },
  pattern: {},
  purchasedCount: 1214,
  rate: 4,
  sizes: [
    {
      price: {
        0: { currency: '', value: 1954 },
        1: { currency: '', value: 1954 }
      },
      size: { available: true }
    }
  ],
  size: {
    available: ''
  }
};

jest.mock('react-redux');
useDispatch.mockImplementation(() => dispatch);

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useSelector.mockImplementation(() => ({
  language: 0,
  currency: 0,
  isLightTheme: true
}));

describe('ProductListItem component tests', () => {
  it('Should render ProductListItem', () => {
    const component = shallow(<ProductListItem product={product} />);
    expect(component).toBeDefined();
  });
});
