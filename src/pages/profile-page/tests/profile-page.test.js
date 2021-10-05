import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import ProfilePage from '../profile-page';

jest.mock('../profile-page.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  userData: {},
  userLoading: '',
  language: 0,
  confirmationEmailSent: '',
  userRecovered: '',
  confirmationLoading: '',
  recoveryLoading: ''
}));

describe('ProfilePage component tests', () => {
  it('Should render ProfilePage', () => {
    const component = shallow(<ProfilePage />);
    expect(component).toBeDefined();
  });
});
