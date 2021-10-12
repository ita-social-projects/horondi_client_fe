import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../error-page';

jest.mock('react-redux');
jest.mock('../error-page.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('connected-react-router', () => ({
  push: 0
}));

const dispatch = jest.fn();
useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  isLightTheme: true,
  errorMessage: ''
}));

describe('ErrorPage is valid', () => {
  it('Should render ErrorPage', () => {
    const component = shallow(<ErrorPage />);

    expect(component).toBeDefined();
  });
});
