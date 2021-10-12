import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../components/app/app-theme/app.theme';
// import { theme } from '../../../src/components/app/app-theme/app.theme';
import ImagesConstructor from '../images-constructor';

const themeValue = theme('light');
jest.mock('react-redux');
const dispatch = jest.fn();
jest.mock('horondi_merge_images', () => ({ DEFAULT_PRICE_VALUE: '1400' }));

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  values: {},
  images: {},
  prices: {},
  methods: {},
  language: 0,
  currency: 0,
  constructorModel: {
    modelsForConstructor: ''
  },
  currentModel: {
    eligibleOptions: ''
  }
}));

describe('ImagesConstructor component tests', () => {
  it('Should render ImagesConstructor', () => {
    const component = mount(
      <ThemeProvider theme={themeValue}>
        <ImagesConstructor />
      </ThemeProvider>
    );
    expect(component).toBeDefined();
  });
});
