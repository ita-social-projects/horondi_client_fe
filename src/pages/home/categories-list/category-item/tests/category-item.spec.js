import React from 'react';

import { useDispatch } from 'react-redux';
import CategoryItem from '../category-item';

let mockDispatch;
let wrapper;

jest.mock('react-redux');

describe('Register component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(
      <CategoryItem categoryName='test' categoryImageUrl='test' categoryUrl='test' />
    );
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Register', () => {
    expect(wrapper).toBeDefined();
  });
});
