import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import ThemeContext from '../../../context/theme-context';
import AppHeader from '../app-header';

jest.mock('../../../containers/search-bar/search-bar.styles.js', () => ({
  useStyles: () => ({})
}));
jest.mock('../../app/app.styles', () => ({
  useAppStyles: () => ({})
}));
jest.mock('../../../containers/wishlist-header', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../containers/cart-header', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../containers/header-profile/header-profile.js', () => ({
  __esModule: true,
  default: () => null
}));
jest.mock('../../../containers/sidebar/sidebar.js', () => ({
  __esModule: true,
    // eslint-disable-next-line react/display-name
  default: ({ isMenuOpen }) => isMenuOpen && <div data-testid='sidebar' />
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

const themeContextProviderMockValues = [true, jest.fn(() => {})];
const store = createStore(() => [], {});
let getByTestId; let getByText; let queryByTestId; let getAllByRole; let getByRole;

describe('Test AppHeader', () => {
  beforeEach(
    () =>
      ({ getByTestId, getByText, queryByTestId, getAllByRole, getByRole } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeContext.Provider value={themeContextProviderMockValues}>
              <AppHeader />
            </ThemeContext.Provider>
          </BrowserRouter>
        </Provider>
      ))
  );
  it('Shoud render component', () => {
    const mainHeaderTitle = 'HORONDI';
    const buttons = getAllByRole('button');
    expect(getByText(mainHeaderTitle)).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(buttons.length).toBe(5);
  });
  it('Top of the header should be visible by default', () => {
    const header = getByTestId('header-container');
    const transform = 'transform: translateY(-35px)';
    act(() => fireEvent.scroll(window, { target: { scrollY: 0 } }));
    expect(header).not.toHaveStyle(transform);
  });
  it('Shoud hide top of the header after scroll down', () => {
    const header = getByTestId('header-container');
    const transform = 'transform: translateY(-35px)';
    act(() => fireEvent.scroll(window, { target: { scrollY: 100 } }));
    expect(header).toHaveStyle(transform);
  });
  it('Burger menu should be closed by default', () => {
    expect(queryByTestId('sidebar')).not.toBeInTheDocument();
  });
  it('Shoud open burger menu', () => {
    const burgerIcon = getByTestId('burger-icon');
    act(() => {
      fireEvent.click(burgerIcon);
    });
    expect(getByTestId('sidebar')).toBeInTheDocument();
  });
});
