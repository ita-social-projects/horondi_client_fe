import React from 'react';
import * as redux from 'react-redux';
import { TextField, Snackbar, Button } from '@material-ui/core';
import { ActiveMessenger } from '../active-messenger';
import { CHAT_USER_DATA } from '../../../../configs';

const visible = true;

const mockHandleMailFormVisible = jest.fn();
const mockDispatch = jest.fn();
const mockSetState = jest.fn();

const mockSetShouldValidate = jest.fn();
const mockSetFieldValue = jest.fn();
const mockHandlerSubmit = jest.fn();

const useStateSpy = jest.spyOn(React, 'useState');

const mockUseDispatch = jest.spyOn(redux, 'useDispatch');
const mockUseSelector = jest.spyOn(redux, 'useSelector');

jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../../redux/chat/chat.actions', () => ({
  __esModule: true,
  default: () => ({
    handleSubmit: mockHandlerSubmit,
    handleBlur: jest.fn(),
    setFieldValue: mockSetFieldValue,
    values: { firstName: 'Test', email: 'test@gmail.com', text: 'Want to ask sth...' },
    errors: {},
    setShouldValidate: mockSetShouldValidate
  })
}));

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
      <ActiveMessenger
        visible={visible}
        HandleMailFormVisible={mockHandleMailFormVisible}
        props={CHAT_USER_DATA}
      />
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
  it('Should test if TextField, Snackbar, Button exist', () => {
    expect(wrapper.find(TextField)).toBeDefined();
    expect(wrapper.find(Snackbar)).toBeDefined();
    expect(wrapper.find(Button)).toBeDefined();
  });
  it('Should renders', () => {
    const wrapper = mount(
      <ActiveMessenger visible={visible} HandleMailFormVisible={mockHandleMailFormVisible} />
    );
    expect(wrapper).not.toBeNull();
  });

  it('Should render alert', () => {
    wrapper = mount(
      <ActiveMessenger visible={visible} HandleMailFormVisible={mockHandleMailFormVisible} />
    );
    expect(
      wrapper
        .find('span')
        .at(1)
        .prop('message', 'Thank you for your letter, we will contact you soon')
    );
  });
  it('Should set value to state when input is changed', () => {
    const container = mount(<TextField />);
    const input = container.find(TextField);
    input.simulate('change', { preventDefault: jest.fn, target: { value: 'foo' } });
  });
});
