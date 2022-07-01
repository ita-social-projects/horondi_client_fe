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
jest.mock('../helperFunc', () => ({
  showIcon: () => jest.fn()
}));
describe('chat tests', () => {
  useQuery.mockImplementation(() => ({
    ...useQueryData
  }));

  beforeEach(() => {
    wrapper = shallow(<Chat />);
  });

  it('Should render chat', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render button', () => {
    const button = wrapper.find('button');

    expect(button).toBeDefined();
  });

  it('Button should be disabled', () => {
    wrapper.find('button').prop('onClick')();
    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });
});
