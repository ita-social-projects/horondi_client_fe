import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ModelItem from '../model-item';

jest.mock('react-redux');

let mockDispatch;
let wrapper;

const mockStore = {
  language: 0,
  products: []
};
const name = [{}, { value: 'test' }];
const model = { category: { name }, name, images: { small: '' } };

describe('Model Item component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useSelector.mockImplementation(() => mockStore);
    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<ModelItem model={model} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Model Item', () => {
    expect(wrapper).toBeDefined();
  });
});
