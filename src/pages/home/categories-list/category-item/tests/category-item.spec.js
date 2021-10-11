import React from 'react';

import { useDispatch } from 'react-redux';
import CategoryItem from '../category-item';

jest.mock('react-redux');

const mockDispatch = jest.fn();

useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(
  <CategoryItem categoryName='test' categoryImageUrl='test' categoryUrl='test' />
);

describe('Register component tests', () => {
  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });
});
