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

const isMenuOpen = jest.fn();

describe('SidemenuRightBar component tests', () => {
  it('should render SidemenuRightBar', () => {
    const component = render(
      <BrowserRouter>
        <SidemenuRightBar fromSideBar setIsMenuOpen={isMenuOpen} />
      </BrowserRouter>
    );

    expect(component.queryAllByTestId('wishlist-icon')[0]).toBeInTheDocument();
  });

  it('wishlist icon should route to wishlist', async () => {
    const component = render(
      <BrowserRouter>
        <SidemenuRightBar fromSideBar setIsMenuOpen={isMenuOpen} />
      </BrowserRouter>
    );

    const wishlistIcon = component.queryAllByTestId('wishlist-icon')[0];

    fireEvent.click(wishlistIcon);

    expect(useDispatch).toHaveBeenCalled();
  });
});
