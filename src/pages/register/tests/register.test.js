import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../components/app/app-theme/app.theme';
import Register from '../register';
import mockStore from './mockStore';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
let spyOnUseSelector;
let spyOnUseDispatch;
let mockDispatch;
let wrapper;

describe('Register component tests', () => {
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

    mockDispatch = jest.fn();

    spyOnUseSelector.mockImplementation(() => mockStore);
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    // console.log(wrapper.debug());
    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <Register />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyOnUseSelector.mockClear();
    wrapper = null;
  });

  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should be confirm email component', () => {
    mockStore.hasRegistered = true;
    expect(wrapper.find('Field[name="firstName"]')).toHaveLength(1);
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(0);
  });
  // Field[name="firstName"]
  it('Should be register component', () => {
    mockStore.hasRegistered = false;
    expect(wrapper.find('img[alt="register info"]')).toHaveLength(1);
    expect(wrapper.find('Field[name="firstName"]')).toHaveLength(0);
  });
});
