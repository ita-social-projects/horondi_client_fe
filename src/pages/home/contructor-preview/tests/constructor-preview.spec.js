import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import { useDispatch } from 'react-redux';
import ConstructorPreview from '../constructor-preview';

jest.mock('react-redux');

const mockDispatch = jest.fn();

useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(
  <MockedProvider>
    <ConstructorPreview />
  </MockedProvider>
);

describe('Constructor preview component tests', () => {
  it('Should render Constructor preview', () => {
    expect(wrapper).toBeDefined();
  });
});
