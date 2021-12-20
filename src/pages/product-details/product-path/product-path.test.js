import React from 'react';
import ProductPath from './product-path';

jest.mock('./product-path.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));

let wrapper;
describe('Test Product-path component', () => {
  it('should render component when Loading true', () => {
    wrapper = shallow(<ProductPath />);
    expect(wrapper).toBeTruthy();
  });
});
