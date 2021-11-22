import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
// import { ThemeProvider } from '@material-ui/styles';
// import { theme } from '../../../components/app/app-theme/app.theme';
import { render } from '@testing-library/react';
import ImagesConstructor from '../images-constructor';
// import userEvent from '@testing-library/user-event';
// import Loader from '../../../components/loader';

// const themeValue = theme('light');
jest.mock('react-redux');
// jest.mock('horondi_merge_images', () => ({ DEFAULT_PRICE_VALUE: '1400' }));
jest.mock('@apollo/client');
jest.mock('../images-constructor.style', () => ({
  useStyles: () => ({})
}));

const useQueryData = {
  error: null,
  loading: false,
  data: {}
};

useQuery.mockImplementation(() => ({
  ...useQueryData
}));
const state = {
  language: 1,
  currency: 0
};

useSelector.mockImplementation(() => state);

describe('ImagesConstructor component tests', () => {
  it('renders h1', () => {
    const { container } = render(<ImagesConstructor />);
    const h1 = container.querySelector('h1');
    expect(h1.textContent).toBe('Create by yourself');
  });
});
