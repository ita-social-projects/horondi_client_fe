import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as redux from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { act } from '@testing-library/react';
import { theme } from '../../../../components/app/app-theme/app.theme';
import { ActiveMessenger } from '../active-messenger';
import { CHAT_USER_DATA } from '../../../../configs';

Enzyme.configure({ adapter: new Adapter() });

const visible = true;

const mockHandleMailFormVisible = jest.fn();
const mockDispatch = jest.fn();
const mockSetState = jest.fn();

const useStateSpy = jest.spyOn(React, 'useState');

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');
const mockSetShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();
const mockHandlerSubmit = jest.fn();
const mockHandleClose = jest.fn();
const themeValue = theme('light');

describe('Active-messenger component test', () => {
  let wrapper;
  beforeEach(() => {
    useStateSpy.mockImplementation(() => [false, mockSetState]);
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockReturnValue({
      language: '0',
      userData: { firstName: 'Test', email: 'test@gmail.com', text: 'Want to ask sth...' }
    });
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ActiveMessenger
          theme={themeValue}
          visible={visible}
          HandleMailFormVisible={mockHandleMailFormVisible}
          props={CHAT_USER_DATA}
        />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    wrapper.unmount();

    mockUseSelector.mockClear();
    useStateSpy.mockClear();
  });

  it('Should render Active-messenger', () => {
    expect(wrapper).toBeDefined();
  });
  it('Should renders', () => {
    const wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ActiveMessenger
          theme={themeValue}
          visible={visible}
          HandleMailFormVisible={mockHandleMailFormVisible}
        />
      </ThemeProvider>
    );
    expect(wrapper).not.toBeNull();
  });

  // it('Should simulate close event', () => {
  //   act(() => {
  //     wrapper.find('button').at(0).props().onClick();
  //   });
  //   expect(mockDispatch).toHaveBeenCalledTimes(1);
  // });

  it('Should render alert', () => {
    wrapper = mount(
      <ThemeProvider theme={themeValue}>
        <ActiveMessenger
          theme={themeValue}
          visible={visible}
          HandleMailFormVisible={mockHandleMailFormVisible}
        />
      </ThemeProvider>
    );
    expect(
      wrapper
        .find('span')
        .at(1)
        .prop('message', 'Thank you for your letter, we will contact you soon')
    );
  });
});
