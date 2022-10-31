import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../app/app-theme/app.theme';
import ThemeContext from '../../../context/theme-context';
import AppHeader from '../app-header';

const mockClearCart = jest.fn();

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
  default: function mockSidebar({ isMenuOpen }) {
    return isMenuOpen && <div data-testid='sidebar' />;
  }
}));

jest.mock('../../../hooks/use-cart', () => ({
  useCart: () => ({
    cartItems: [{ id: '84d7' }],
    cartOperations: { clearCart: mockClearCart }
  })
}));
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  }),
  Trans: () => jest.fn()
}));

const themeValue = theme('light');
const themeContextProviderMockValues = [true, jest.fn(() => {})];
const store = createStore(() => [], {});
const expireDateMock = '2022-10-23T00:00:00.000+00:00';

let getByTestId;
let getByText;
let queryByTestId;
let getAllByRole;
let getByRole;
let queryByText;

describe('Test AppHeader', () => {
  beforeEach(
    () =>
      ({ getByTestId, getByText, queryByTestId, getAllByRole, getByRole, queryByText } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={themeValue}>
              <ThemeContext.Provider value={themeContextProviderMockValues}>
                <AppHeader expireDate={expireDateMock} />
              </ThemeContext.Provider>
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      ))
  );
  it('Shoud render component', () => {
    const mainHeaderTitle = 'HORONDI';
    const buttons = getAllByRole('button');
    expect(getByText(mainHeaderTitle)).toBeInTheDocument();
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(buttons.length).toBe(6);
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
  it('Shoud show notification bar', () => {
    const notificationButton = getByText('certificate.certificateNotificationButton');

    expect(notificationButton).toBeInTheDocument();
  });
  it('Shoud close notification bar', () => {
    const closeNotificationButton = getByTestId('closeNotification');
    fireEvent.click(closeNotificationButton);
    const notificationButton = queryByText('certificate.certificateNotificationButton');
    expect(notificationButton).not.toBeInTheDocument();
  });
});

describe('Test AppHeader without prop', () => {
  beforeEach(
    () =>
      ({ getByTestId, getByText, queryByTestId, getAllByRole, getByRole, queryByText } = render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={themeValue}>
              <ThemeContext.Provider value={themeContextProviderMockValues}>
                <AppHeader expireDate={null} />
              </ThemeContext.Provider>
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      ))
  );
  it('Shoudn`t show notification bar', () => {
    const notificationButton = queryByText('certificate.certificateNotificationButton');

    expect(notificationButton).not.toBeInTheDocument();
  });
  it('Should clean cart', () => {
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'test_key',
        newValue: 'test_value'
      })
    );
    expect(mockClearCart).toHaveBeenCalled();
  });
});
