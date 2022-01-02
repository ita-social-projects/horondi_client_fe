import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Recovery from '../recovery.js';
import { AuthWrapper, AuthButton, AuthHeading } from '../../../components/auth-form';

jest.mock('../recovery.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  error: false,
  userRecovered: '',
  recoveryLoading: ''
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<Recovery />);
    expect(component).toBeDefined();
  });
  it('Should contains Auth Components', () => {
    const component = mount(<Recovery />);
    expect(component.find(AuthButton).length).toBe(1);
    expect(component.find(AuthHeading).length).toBe(1);
    expect(component.find(AuthWrapper).length).toBe(1);
  });
});
