import React from 'react';
import * as redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../../components/app/app-theme/app.theme';

import NotFoundPage from '../not-found-page';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();
const mockUseHistory = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    goBack: mockUseHistory
  })
}));

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

describe('', () => {
  let wrapper;

  beforeEach(() => {
    const themeValue = theme('light');

    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
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
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
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

    mockUseSelector.mockReturnValue({
      language: '0',
      isLightTheme: true
    });

    const Language = { language: 1 };
    const Theme = { lightMode: false };

    mockUseSelector.mockImplementation((callback) => callback({ Language, Theme }));

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <NotFoundPage />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(mockUseSelector).toHaveBeenCalled();
    expect(mockUseSelector).toHaveBeenCalledTimes(2);

    mockUseSelector.mockClear();
  });
});
