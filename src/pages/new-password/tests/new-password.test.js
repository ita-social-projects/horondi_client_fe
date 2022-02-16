import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NewPassword from '../new-password';
import { AuthWrapper, AuthButton, AuthHeading } from '../../../components/auth-form';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../new-password/new-password.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

jest.mock('../../../components/auth-form/auth-form-button/auth-form-button.styles', () => ({
  useStyles: () => ({})
}));

const dispatch = jest.fn();
const state = {
  userError: '',
  loading: false,
  passwordReset: '',
  language: 0
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

describe('NewPassword component', () => {
  it('should render', () => {
    shallow(<NewPassword />);
  });
  it('Should contains Auth Components', () => {
    const component = mount(<NewPassword />);

    expect(component.find(AuthHeading).length).toBe(1);
    expect(component.find(AuthButton).length).toBe(1);
    expect(component.find(AuthWrapper).length).toBe(1);
  });
});
