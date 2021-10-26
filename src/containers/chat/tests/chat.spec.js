import React from 'react';
import { useQuery } from '@apollo/client';
import Chat from '..';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getContactsForChat: [{}] }
};

jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../context/theme-context', () => ({}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true, () => null]
}));

describe('chat tests', () => {
  it('should render chat', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));

    wrapper = shallow(<Chat />);
    expect(wrapper).toBeDefined();
  });

  it('should cover other branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      loading: true
    }));

    wrapper = shallow(<Chat />);
  });

  it('should cover rest branches', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData,
      error: {}
    }));

    wrapper = shallow(<Chat />);
  });
});
