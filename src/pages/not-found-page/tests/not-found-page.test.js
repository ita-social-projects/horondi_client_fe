import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../components/app/app-theme/app.theme';
import NotFoundPage from '../not-found-page';

const mockDispatch = jest.fn();
const mockUseHistory = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: mockUseHistory
  })
}));

jest.mock('react-redux');

describe('', () => {
  let wrapper;

  beforeEach(() => {
    const themeValue = theme('light');

    useDispatch.mockImplementation(() => mockDispatch);
    useSelector.mockReturnValue({
      language: '0',
      isLightTheme: true
    });

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <NotFoundPage />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
    useDispatch.mockClear();
    useSelector.mockClear();
  });

  it('Should render 404 page', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should click back-page button', () => {
    const btn = wrapper.find('button');
    btn.simulate('click');

    expect(mockUseHistory).toHaveBeenCalledTimes(1);
  });

  it('Should work with dark theme', () => {
    const themeValue = theme('dark');

    useSelector.mockReturnValue({
      language: '0',
      isLightTheme: true
    });

    const Language = { language: 1 };
    const Theme = { lightMode: false };

    useSelector.mockImplementation((callback) => callback({ Language, Theme }));

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <NotFoundPage />
        </ThemeProvider>
      </BrowserRouter>
    );

    useSelector.mockClear();
  });
});
