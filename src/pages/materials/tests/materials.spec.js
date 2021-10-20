import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import Materials from '../materials';

jest.mock('react-redux');
const dispatch = jest.fn();

jest.mock('../materials.style.js', () => ({
  useStyles: () => ({})
}));
jest.mock('@apollo/client');
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router')
}));

useDispatch.mockImplementation(() => dispatch);
useSelector.mockImplementation(() => ({
  patterns: []
}));

useQuery.mockImplementation(() => ({ error: null, loading: false }));

describe('Materials component tests', () => {
  it('Should render Materials', () => {
    const component = shallow(<Materials />);
    expect(component).toBeDefined();
  });
});
