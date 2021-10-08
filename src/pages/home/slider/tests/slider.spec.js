import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import SliderHomePage from '../slider-home-page';

let mockDispatch;
let wrapper;

jest.mock('react-redux');

const testData = { 0: { value: 'test' } };
const mockStore = {
  language: 0,
  images: {
    items: [{ show: true, title: testData, description: testData, images: { large: 'test' } }]
  }
};

describe('Slider component tests', () => {
  beforeEach(() => {
    mockDispatch = jest.fn();

    useSelector.mockImplementation(() => mockStore);
    useDispatch.mockReturnValue(mockDispatch);

    wrapper = shallow(<SliderHomePage />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should render Slider', () => {
    expect(wrapper).toBeDefined();
  });
});
