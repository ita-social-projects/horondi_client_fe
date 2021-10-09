import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import SearchBarListItem from '../search-bar-list-item';

jest.mock('react-redux');

jest.mock('connected-react-router',() => ({
  push: 0
}));
const mockStore = {
  currency: 0,
  lightMode: true
};
const product = {
  images: { primary: { small: 'test' } },
  name: { 0: { value: 'test' } },
  basePrice: { 0: { value: 'test', currency: 'test' } }
};
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<SearchBarListItem product={product} />);

describe('Register component tests', () => {
  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });
});
