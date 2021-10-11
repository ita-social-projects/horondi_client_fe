import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import NewPassword from '../new-password';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../new-password/new-password.styles', () => ({ useStyles: () => ({}) }));
jest.mock('react-redux');

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
});
