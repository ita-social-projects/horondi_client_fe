import React from 'react';
import i18next from 'i18next';
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
  it('Should render <ProductInfo /> with not available product', () => {
    const component = shallow(<ProductInfo {...props(false, 0, false)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.noComments'));
  });
  it('Product info count  = 1', () => {
    const component = shallow(<ProductInfo {...props(true, 1)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.commentsOne'));
  });
  it('Product info count  = 2', () => {
    const component = shallow(<ProductInfo {...props(true, 2)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.commentsTwo'));
  });
  it('Product info count  = 3', () => {
    const component = shallow(<ProductInfo {...props(true, 3)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.commentsTwo'));
  });
  it('Product info count  = 4', () => {
    const component = shallow(<ProductInfo {...props(true, 4)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.commentsTwo'));
  });
  it('Product info count  = 5', () => {
    const component = shallow(<ProductInfo {...props(true, 5)} />);
    expect(component.find('a').textContent).toBe(i18next.t('product.comments.title'));
  });
});
