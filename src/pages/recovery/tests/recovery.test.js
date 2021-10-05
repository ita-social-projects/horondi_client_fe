import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import Recovery from '../recovery.js';

jest.mock('../recovery.styles', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');

const dispatch = jest.fn();

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  error: false,
  userRecovered: '',
  recoveryLoading: '',
  language: 0
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<Recovery />);
    expect(component).toBeDefined();
  });
});
