import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../error-page';

Enzyme.configure({ adapter: new Adapter() });

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
  language: 0,
  isLightTheme: true,
  errorMessage: ''
}));

describe('ErrorPage is valid', () => {
  it('Should render ErrorPage', () => {
    const component = shallow(<ErrorPage />);

    expect(component).toBeDefined();
  });
});
