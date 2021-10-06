import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as reactRedux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../../../components/app/app-theme/app.theme';

import mockStore from './mockStore';
import ModelsList from '../models-list';
import ClassicButton from '../../../../components/classic-button';

Enzyme.configure({ adapter: new Adapter() });

const themeValue = theme('light');
let spyOnUseSelector;
let spyOnUseDispatch;
let mockDispatch;
let wrapper;

describe('Models list component tests', () => {
  beforeEach(() => {
    spyOnUseSelector = jest.spyOn(reactRedux, 'useSelector');
    spyOnUseDispatch = jest.spyOn(reactRedux, 'useDispatch');

    mockDispatch = jest.fn();

    spyOnUseSelector.mockImplementation(() => mockStore);
    spyOnUseDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <ModelsList />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyOnUseSelector.mockClear();
    wrapper = null;
  });

  it('Should render models-list', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render another button', () => {
    act(() => {
      wrapper.find(ClassicButton).props().onClickHandler();
    });

    expect(wrapper.find(ClassicButton).props().buttonStyle).toBe('inverse');
  });
});
