import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SliderHomePage from '../../../../../pages/home/slider/slider-home-page';

const mockHandleSwitch = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: () => null, i18n: { language: 'ua' } })
}));
jest.mock('../../../../../pages/home/slider/slider-home-page.style', () => ({
  useStyles: () => ({})
}));

describe('SliderHomePage is valid', () => {
  it('Should render SliderHomePage', () => {
    render(
      <Router>
        {' '}
        <SliderHomePage />{' '}
      </Router>
    );
    expect(screen.getByText(/03/)).toBeInTheDocument();
  });

  it('should test arrow right', () => {
    render(
      <Router>
        {' '}
        <SliderHomePage />{' '}
      </Router>
    );
    const slider = screen.getByAltText('arrow right');

    fireEvent.click(slider);
    expect(screen.getByText(/02/)).toBeInTheDocument();
  });

  it('should test arrow left', () => {
    render(
      <Router>
        {' '}
        <SliderHomePage />{' '}
      </Router>
    );
    const slider = screen.getByAltText('arrow left');

    fireEvent.click(slider);
    expect(mockHandleSwitch).toHaveBeenCalledTimes(0);
  });
});
