import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DollarIcon } from '../../../images/profile-icons';
import ProductListItem from '../product-list-item/product-list-item';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

const dispatch = jest.fn();
const product = {
  _id: '605658df158e2fdb53498442',
  availableCount: 0,
  basePrice: 0,
  category: {},
  images: { primary: { large: '' } },
  isHotItem: true,
  mainMaterial: {},
  model: {},
  name: {
    0: { value: '' },
    1: { value: '' }
  },
  pattern: {},
  purchasedCount: 1214,
  rate: 4,
  sizes: [
    {
      price: 50,
      size: { available: true }
    },
    {
      price: 100,
      size: { available: true }
    }
  ]
};

jest.mock('react-redux');
useDispatch.mockImplementation(() => dispatch);

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

useSelector.mockImplementation(() => ({
  language: 0
}));

jest.mock('../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('ProductListItem component tests', () => {
  it('Should render ProductListItem', () => {
    const component = shallow(<ProductListItem product={product} />);
    expect(component).toBeDefined();
  });
});
