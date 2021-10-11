import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountPerPage from '../count-per-page/count-per-page';

jest.mock('react-redux');
const dispatch = jest.fn();

jest.mock('react-router', () => ({
  useLocation: () => ({ search: jest.fn() }),
  useHistory: () => jest.fn()
}));

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  useLocation: ''
}));

describe('Recovery component tests', () => {
  it('Should render Recovery', () => {
    const component = shallow(<CountPerPage />);
    expect(component).toBeDefined();
  });
});
