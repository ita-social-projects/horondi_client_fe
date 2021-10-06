import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../../../components/app/app-theme/app.theme';

import mockStore from './mockStore';
import SearchBarListItem from '../search-bar-list-item';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
let spyOnUseSelector;
let spyOnUseDispatch;
let mockDispatch;
let wrapper;
const product = {
  images: { primary: { small: 'test' } },
  name: { 0: { value: 'test' } },
  basePrice: { 0: { value: 'test', currency: 'test' } }
};

describe('Register component tests', () => {
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

    mockDispatch = jest.fn();

    spyOnUseSelector.mockImplementation(() => mockStore);
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <SearchBarListItem product={product} />
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
});
