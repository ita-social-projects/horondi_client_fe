import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import SearchBarListItem from '../search-bar-list-item';

let mockDispatch;
let wrapper;

jest.mock('react-redux');

jest.mock('connected-react-router',() => ({
  push: 0
}));
const mockStore = {
  language: 0,
  currency: 0,
  lightMode: true
};
const product = {
  images: { primary: { small: 'test' } },
  name: { 0: { value: 'test' } },
  basePrice: { 0: { value: 'test', currency: 'test' } }
};

describe('Register component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useSelector.mockImplementation(() => mockStore);
    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<SearchBarListItem product={product} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });
});
