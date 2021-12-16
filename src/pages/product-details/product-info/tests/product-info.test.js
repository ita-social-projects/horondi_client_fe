import React from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../product-info';
import { props } from './product-info.variables';

jest.mock('react-redux');

jest.mock('../product-info.styles', () => ({
  useStyles: () => ({})
}));

useSelector.mockImplementation(() => ({
  language: 0,
  currency: 0,
  ...props(true).product,
  strapLengthInCm: '100',
  currentPrice: {
    price: [
      {
        value: 70
      }
    ]
  },
  currentWeight: {
    dimensions: {
      weightInKg: 1
    }
  },
  currentVolume: {
    dimensions: {
      volumeInLiters: 22
    }
  }
}));

describe('Product info', () => {
  it('Should render <ProductInfo />', () => {
    const component = shallow(<ProductInfo {...props(true)} />);
    expect(component).toBeDefined();
  });
});
describe('fsdfs', () => {
  it('.dasd', () => {
    const component = shallow(<ProductInfo {...props(false)} />);
    expect(component).toBeDefined();
  });
});
