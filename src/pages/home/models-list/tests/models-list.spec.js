import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../../components/app/app-theme/app.theme';

import ModelsList from '../models-list';
import ClassicButton from '../../../../components/classic-button';

jest.mock('react-redux');

const mockStore = {
  loading: false,
  models: []
};

const themeValue = theme('light');
let mockDispatch;
let wrapper;

describe('Models list component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useSelector.mockImplementation(() => mockStore);
    useDispatch.mockReturnValue(mockDispatch);

    wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={themeValue}>
          <ModelsList />
        </ThemeProvider>
      </BrowserRouter>
    );
  });

  afterEach(() => {
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
