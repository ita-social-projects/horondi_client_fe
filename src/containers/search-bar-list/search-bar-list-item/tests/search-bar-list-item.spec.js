import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import SearchBarListItem from '../search-bar-list-item';
import { product, mockStore } from './search-bar-list-item.variables';

jest.mock('react-redux');

const mockDispatch = jest.fn();
const etalonString = 'test';

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

jest.mock('connected-react-router', () => ({
  push: () => etalonString
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
    t: () => etalonString
  })
}));

jest.mock('../../../../utils/imageLoad', () => ({
  getImage: () => Promise.resolve(etalonString)
}));

jest.mock('../search-bar-list-item.styles', () => ({
  useStyles: () => ({})
}));

describe('test SearchBarListItem component', () => {
  it('Component should render appropriate `h4`', () => {
    const { container } = render(<SearchBarListItem product={product} />);
    const el = container.querySelector('h4');
    expect(el.textContent).toBe(etalonString);
  });

  it('after click on button component should call dispatch', () => {
    const { container } = render(<SearchBarListItem product={product} />);
    const el = container.querySelector('button');
    el.click();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Component should render image', () => {
    render(<SearchBarListItem product={product} />);
    const el = screen.getByTestId('image');
    expect(el).toBeInTheDocument();
  });
});
