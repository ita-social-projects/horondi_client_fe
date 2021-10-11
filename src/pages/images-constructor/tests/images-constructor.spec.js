import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
// import { Button } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
import { theme } from '../../../components/app/app-theme/app.theme';
// import { useDispatch, useSelector } from 'react-redux';
import ImagesConstructor from '../images-constructor';

const themeValue = theme('light');

jest.mock('horondi_merge_images', () => ({ DEFAULT_PRICE_VALUE: '1400' }));
jest.mock('../images-constructor.style', () => ({
  useStyles: () => ({})
}));
// jest.mock('react-redux');

// useDispatch.mockImplementation(() => jest.fn());
// useSelector.mockImplementation(() => jest.fn());

let wrapper;

describe('ImagesConstructor component tests', () => {
  beforeEach(() => {
    wrapper = shallow(
      <ThemeProvider theme={themeValue}>
        <ImagesConstructor />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render ImagesConstructor', () => {
    expect(wrapper).toBeDefined();
  });

  it('ImagesConstructor should contain button', () => {
    expect(wrapper.find('h2')).toBeDefined();
  });
});
