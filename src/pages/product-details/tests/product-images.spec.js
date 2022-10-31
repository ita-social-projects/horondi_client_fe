import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../components/app/app-theme/app.theme';
import ThemeContext from '../../../context/theme-context';
import ProductImages from '../product-images/product-images';

jest.mock('../../../utils/imageLoad.js', () => ({
  getImage: () => Promise.resolve('test')
}));

const themeValue = theme('light');
const themeContextProviderMockValues = [true, jest.fn(() => {})];
const images = {
  primary: {
    large: 'large_agl7glgl46ol3ss_large_4052em10l1ahsy27_137.png',
    medium: 'medium_agl7glgl46ol3ss_large_4052em10l1ahsy27_137.png',
    small: 'small_agl7glgl46ol3ss_large_4052em10l1ahsy27_137.png',
    thumbnail: 'thumbnail_agl7glgl46ol3ss_large_4052em10l1ahsy27_137.png'
  },
  additional: []
};

describe('ProductImages component tests', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={themeValue}>
        <ThemeContext.Provider value={themeContextProviderMockValues}>
          <ProductImages images={images} />
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  });
  it('Should render ProductImages', async () => {
    const image = await screen.findByTestId('product-image');

    expect(image).toBeInTheDocument();
  });
});
