import React from 'react';
import { useQuery } from '@apollo/client';
import Chat from '..';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getContacts: [{}] }
};

jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../context/theme-context', () => ({}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true, () => null]
}));
jest.mock('react-messenger-chat-plugin', () => 'react-messenger-chat-plugin');

describe('chat tests', () => {
  it('Should render chat', () => {
    useQuery.mockImplementation(() => ({
      ...useQueryData
    }));
    wrapper = shallow(<Chat />);
    expect(wrapper).toBeDefined();
  });
});
