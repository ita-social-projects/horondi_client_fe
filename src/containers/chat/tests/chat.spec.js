import React from 'react';
import { useQuery } from '@apollo/client';
import { waitForElement } from '@testing-library/react';
import Chat from '..';

let wrapper;
const useQueryData = {
  loading: false,
  error: false,
  data: { getContacts: [{}] }
};

window.FB = { init: jest.fn() };
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../chat.style.js', () => ({ useStyles: () => ({}) }));
jest.mock('../../../context/theme-context', () => ({}));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: () => [true, () => null]
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
    waitForElement(() => {
      wrapper.find('button').prop('onClick')();
    });

    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });
});
