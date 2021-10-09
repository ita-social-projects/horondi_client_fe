import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ModelItem from '../model-item';

jest.mock('react-redux');

const mockStore = {
  language: 0,
  products: []
};
const name = [{}, { value: 'test' }];
const model = { category: { name }, name, images: { small: '' } };
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<ModelItem model={model} />);

describe('Model Item component tests', () => {
  it('Should render Model Item', () => {
    expect(wrapper).toBeDefined();
  });
});
