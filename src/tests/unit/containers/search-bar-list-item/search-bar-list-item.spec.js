import React from 'react';

import { useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';
import SearchBarListItem from '../../../../containers/search-bar-list/search-bar-list-item/search-bar-list-item';
import { product } from './search-bar-list-item.variables';

const mockGetPriceWithCurrency = jest.fn((value) => value);

const mockDispatch = jest.fn();

jest.mock('react-redux');

useDispatch.mockReturnValue(mockDispatch);

jest.mock('connected-react-router', () => ({
  push: () => 'test'
}));

jest.mock('@material-ui/styles', () => ({
  ...jest.requireActual('@material-ui/styles'),
  useTheme: () => ({
    palette: {
      type: 'light'
    }
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => 'test'
  })
}));

jest.mock('../../../../utils/imageLoad', () => ({
  getImage: () => Promise.resolve('test')
}));

jest.mock(
  '../../../../containers/search-bar-list/search-bar-list-item/search-bar-list-item.styles',
  () => ({
    useStyles: () => ({})
  })
);

jest.mock('../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency
  })
}));

describe('test SearchBarListItem component', () => {
  const etalonString = 'test';
  let container;

  beforeEach(() => {
    ({ container } = render(<SearchBarListItem product={product} />));
  });

  it('Component should render appropriate `h4`', () => {
    const el = container.querySelector('h4');
    expect(el.textContent).toBe(etalonString);
  });

  it('after click on button component should call dispatch', () => {
    const el = container.querySelector('button');
    el.click();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Component should render image', () => {
    const el = screen.getByTestId('image');
    expect(el).toBeInTheDocument();
  });
});
