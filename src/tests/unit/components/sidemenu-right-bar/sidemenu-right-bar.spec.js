import React from 'react';
import { useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SidemenuRightBar from '../../../../containers/sidemenu-right-bar';

jest.mock('react-redux');
jest.mock('../../../../containers/sidemenu-right-bar/sidemenu-right-bar.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('connected-react-router', () => ({
  push: () => jest.fn()
}));

useDispatch.mockImplementation(() => jest.fn());

jest.mock('../../../../containers/wishlist-header', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../../containers/language', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../../containers/cart-header', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../../containers/currency', () => ({
  __esModule: true,
  default: () => null
}));

const setIsMenuOpen = jest.fn();

describe('SidemenuRightBar component tests', () => {
  it('should render SidemenuRightBar', () => {
    const component = render(
      <BrowserRouter>
        <SidemenuRightBar fromSideBar setIsMenuOpen={setIsMenuOpen} />
      </BrowserRouter>
    );

    expect(component.queryByTestId('wishlist-icon')).toBeInTheDocument();
  });

  it('should close sidemenu if cart opened', () => {
    const component = render(
      <BrowserRouter>
        <SidemenuRightBar fromSideBar setIsMenuOpen={setIsMenuOpen} />
      </BrowserRouter>
    );

    const cartIcon = component.queryByTestId('cart-icon');

    fireEvent.click(cartIcon);

    expect(setIsMenuOpen).toHaveBeenCalled();
  });
});
