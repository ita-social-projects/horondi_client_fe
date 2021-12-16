import React from 'react';
import { useSelector } from 'react-redux';
import ProductDescription from '../../../../../pages/product-details/product-description';
import { product } from './product-description.variables';

jest.mock('react-redux');
jest.mock(
  '../../../../../pages/product-details/product-description/product-description.styles.js',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));

useSelector.mockImplementation(() => ({ currentWeight: '', currentVolume: '' }));

let wrapper;
describe('Test newsPage', () => {
  it('should render component when Loading true', () => {
    wrapper = shallow(<ProductDescription product={product} />);
    expect(wrapper).toBeTruthy();
  });
});
