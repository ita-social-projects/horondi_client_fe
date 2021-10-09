import React from 'react';

import { useDispatch } from 'react-redux';
import ConstructorPreview from '../constructor-preview';

jest.mock('react-redux');

const mockDispatch = jest.fn();

useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<ConstructorPreview />);

describe('Constructor preview component tests', () => {
  it('Should render Constructor preview', () => {
    expect(wrapper).toBeDefined();
  });
});
