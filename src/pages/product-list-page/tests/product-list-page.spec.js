import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { useDispatch, useSelector } from 'react-redux';
import Enzyme, { shallow } from 'enzyme';
import CountPerPage from '../count-per-page/count-per-page';

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });
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
  });
});
