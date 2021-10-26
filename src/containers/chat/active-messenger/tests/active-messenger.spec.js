import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Snackbar, Button } from '@material-ui/core';
import { useMutation } from '@apollo/client';
import { ActiveMessenger } from '../active-messenger';
import errorOrLoadingHandler from '../../../../utils/errorOrLoadingHandler';

const visible = true;
const themeMode = [true, () => ({})];
const mockStore = {
  userData: {},
  language: 0
};
const mockHandleMailFormVisible = true;
let loading = false;

jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useSelector.mockImplementation(() => mockStore);
useMutation.mockImplementation(() => [
  jest.fn(),
  {
    loading,
    error: null,
    data: { sendEmailMutation: [{ addEmailQuestion: { question: { senderName: 'name' } } }] }
  }
]);

let wrapper;

describe('Active-messenger component test', () => {
  beforeEach(() => {
    wrapper = shallow(
      <ActiveMessenger
        visible={visible}
        mailFormVisible={mockHandleMailFormVisible}
        themeMode={themeMode}
      />
    );
  });

  afterEach(() => {
    wrapper = null;
    useSelector.mockClear();
  });

  it('Should render Active-Messenger', () => {
    expect(wrapper).toBeDefined();
  });
  it('Should test if TextField, Snackbar, Button exist', () => {
    expect(wrapper.find(TextField)).toBeDefined();
    expect(wrapper.find(Snackbar)).toBeDefined();
    expect(wrapper.find(Button)).toBeDefined();
  });
  it('Should renders component', () => {
    const wrapper = mount(
      <ActiveMessenger visible={visible} HandleMailFormVisible={mockHandleMailFormVisible} />
    );
    expect(wrapper).not.toBeNull();
    wrapper.unmount();
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
    wrapper.unmount();
  });
  it('Should set value to state when input is changed', () => {
    const container = mount(<TextField />);
    const input = container.find(TextField);
    input.simulate('change', { preventDefault: jest.fn, target: { value: 'foo' } });
  });
  it('Shoulr render onChange in First Name', () => {
    const input = wrapper.find(`[name='firstName']`);
    input.simulate('change', { target: { value: 'Hello' } });
  });
  it('Shoulr render onChange in email', () => {
    const input = wrapper.find(`[name='email']`);
    input.simulate('change', { target: { value: 'Hello' } });
  });
  it('Shoulr render onChange in message', () => {
    const input = wrapper.find(`[name='message']`);
    input.simulate('change', { target: { value: 'Hello' } });
  });
  it('should render errorOrLoadingHandler', () => {
    loading = true;
    wrapper = shallow(
      <ActiveMessenger
        visible={visible}
        mailFormVisible={mockHandleMailFormVisible}
        themeMode={themeMode}
      />
    );

    expect(wrapper.find(errorOrLoadingHandler)).toBeDefined();
  });
});
