import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderProfile from '../header-profile';

jest.mock('connected-react-router', () => {
  jest.fn();
});
jest.mock('react-redux');
jest.mock('../header-profile.styles.js', () => ({ useStyles: () => ({}) }));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}));

const dispatch = jest.fn();
const state = {
  language: 1,
  userData: {}
};

const props = {
  fromSideBar: {},
  setIsMenuOpen: () => null
};

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => state);

let wrapper;

describe('HeaderProfile component tests', () => {
  beforeEach(() => {
    wrapper = shallow(<HeaderProfile {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render HeaderProfile', () => {
    expect(wrapper).toBeDefined();
  });
});
