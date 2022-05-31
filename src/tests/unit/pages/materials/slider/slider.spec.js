import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from '../../../../../pages/materials/slider';
import { paterns, sliderImages } from './slider.variables';

describe('Slider component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Slider sliderlImages={sliderImages} patterns={paterns} />);
  });

  it('should contain carousel', () => {
    const carouselList = wrapper.getByRole('list');

    expect(carouselList).toBeInTheDocument();
  });

  it('the counter element should show the number of items', () => {
    const counter = wrapper.getByText(/03/);

    expect(counter).toBeInTheDocument();
  });

  it('should simulate click on button', () => {
    const handleChange = jest.fn();
    const buttonNext = wrapper.getByLabelText('next');

    fireEvent.click(buttonNext, { handleChange: handleChange() });

    expect(handleChange).toHaveBeenCalled();
  });
});
