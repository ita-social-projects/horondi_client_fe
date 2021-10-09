import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import SliderHomePage from '../slider-home-page';

jest.mock('react-redux');

const testData = { 0: { value: 'test' } };
const mockStore = {
  images: {
    items: [{ show: true, title: testData, description: testData, images: { large: 'test' } }]
  }
};
const mockDispatch = jest.fn();

useSelector.mockImplementation(() => mockStore);
useDispatch.mockReturnValue(mockDispatch);

const wrapper = shallow(<SliderHomePage />);

describe('Slider component tests', () => {
  it('Should render Slider', () => {
    expect(wrapper).toBeDefined();
  });
});
