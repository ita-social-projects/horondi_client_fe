import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { mockSlides } from './slider-home-page.variables';
import SliderHomePage from '../../../../../pages/home/slider/slider-home-page';

jest.mock('../../../../../pages/home/slider/slider-home-page.style', () => ({
  useStyles: () => ({})
}));

describe('SliderHomePage is valid', () => {
  beforeEach(() => {
    act(() => {
      render(
        <Router>
          <MockedProvider mocks={mockSlides} addTypename={false}>
            <SliderHomePage />
          </MockedProvider>
        </Router>
      );
    });
  });

  it('should test right and left slider arrow buttons', async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    const rightButton = screen.getByRole('button', { name: /next slide/i });
    const leftButton = screen.getByRole('button', { name: /previous slide/i });
    fireEvent.click(rightButton);
    fireEvent.click(rightButton);
    fireEvent.click(leftButton);

    const currentSlide = screen.getByText(/02/i);

    expect(currentSlide).toBeInTheDocument();
  });
});
