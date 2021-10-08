import React from 'react';

import { useDispatch } from 'react-redux';
import ConstructorPreview from '../constructor-preview';

let mockDispatch;
let wrapper;

jest.mock('react-redux');

describe('Constructor preview component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<ConstructorPreview />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Constructor preview', () => {
    expect(wrapper).toBeDefined();
  });
});
