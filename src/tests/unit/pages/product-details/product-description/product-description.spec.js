import React from 'react';
import ProductDescription from '../../../../../pages/product-details/product-description';
import { product } from './product-description.variables';

jest.mock(
  '../../../../../pages/product-details/product-description/product-description.styles.js',
  () => ({
    useStyles: () => ({})
  })
);
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => ({
      description: 'Ззовні: передня кишеня - 20х20 та потаємна кишеня на спинці на замочку;'
    }),
    i18n: { language: 'ua' }
  })
}));

let wrapper;
describe('Test Product-description component', () => {
  it('should render component when Loading true', () => {
    wrapper = shallow(<ProductDescription product={product} currentSizeIndex={0} />);
    expect(wrapper).toBeTruthy();
  });
});
