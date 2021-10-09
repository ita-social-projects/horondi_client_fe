import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../components/app/app-theme/app.theme';
import ImagesConstructor from '../images-constructor';

const themeValue = theme('light');

let wrapper;

jest.mock('horondi_merge_images', () => ({ DEFAULT_PRICE_VALUE: '1400' }));

describe('ImagesConstructor component tests', () => {
  wrapper = shallow(
    <ThemeProvider theme={themeValue}>
      <ImagesConstructor />
    </ThemeProvider>
  );

  it('Should render ImagesConstructor', () => {
    expect(wrapper).toBeDefined();
  });
});
