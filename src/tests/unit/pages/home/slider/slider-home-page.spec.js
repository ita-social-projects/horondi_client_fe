import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockSlides } from './slider-home-page.variables';
import SliderHomePage from '../../../../../pages/home/slider/slider-home-page';

jest.mock('../../../../../pages/home/slider/slider-home-page.style', () => ({
  useStyles: () => ({})
}));

describe('SliderHomePage is valid', () => {
  beforeEach(() => {
    render(
      <Router>
        <MockedProvider mocks={mockSlides} addTypename={false}>
          <SliderHomePage />
        </MockedProvider>
      </Router>
    );
  });

  it('should test right and left slider arrow buttons', async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    const leftButton = screen.getByRole('button', { name: /previous slide/i });
    const rightButton = screen.getByRole('button', { name: /next slide/i });

    fireEvent.click(rightButton);
    const statusAfterRightClick = screen.getByText('02');
    expect(statusAfterRightClick).toBeInTheDocument();

    fireEvent.click(leftButton);
    const statusAfterLeftClick = screen.getByText('01');
    expect(statusAfterLeftClick).toBeInTheDocument();
  });
});
