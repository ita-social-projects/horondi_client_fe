import React from 'react';
import { render } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../../components/app/app-theme/app.theme';
import Materials from '../../../../pages/materials';

jest.mock('../../../../utils/imageLoad', () => ({
  getImage: () => 'LARGE'
}));
jest.mock('@apollo/client');

const useQueryData = {
  error: null,
  loading: false,
  data: {
    getAllPatterns: {
      items: []
    },
    getMaterialsBlocksByType: {
      items: []
    }
  }
};

const useQueryDataLoading = {
  error: null,
  loading: true
};

const themeValue = theme('light');

describe('Materials component tests', () => {
  it('Should render Materials', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    const { getByRole } = render(
      <ThemeProvider theme={themeValue}>
        <Materials />
      </ThemeProvider>
    );

    const mainHeader = getByRole('heading');

    expect(mainHeader).toBeInTheDocument();
  });
  it('should not be rendered', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryDataLoading
    }));

    const { queryByRole, getByTestId } = render(
      <ThemeProvider theme={themeValue}>
        <Materials />
      </ThemeProvider>
    );

    const mainHeader = queryByRole('heading');
    const loader = getByTestId('loader');

    expect(mainHeader).toBeNull();
    expect(loader).toBeInTheDocument();
  });
});
