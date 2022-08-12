import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useQuery } from '@apollo/client';
import { TestWrapper } from './scroll-bar.variables';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: () => 'scrollBarItem',
    i18n: { changeLanguage: jest.fn() }
  })
}));

jest.mock('../scroll-bar.styles.js', () => ({
  scrollBarStyles: () => ({})
}));

jest.mock('@apollo/client');

useQuery.mockImplementation(() => ({}));

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({ marginTop: '0px', marginBottom: '0px' })
});

describe('ScrollBar component render test', () => {
  test('Should render ScrollBar', () => {
    const component = shallow(<TestWrapper />);
    expect(component).toBeDefined();
  });
});

describe('ScrollBar testing', () => {
  beforeEach(() => {
    render(<TestWrapper />);
  });

  test('should render ScrollBar with initial props', () => {
    expect(screen.queryByTestId('scroll-bar-div')).toBeInTheDocument();
  });

  test('section should be equal to slider', () => {
    const sliderSection = screen.getByTestId('section-div-#slider');
    expect(sliderSection.getAttribute('data-id')).toEqual('true');
  });

  test('after scroll section should be equal to catalog', () => {
    fireEvent.scroll(window, { target: { scrollY: 750 } });
    const catalogSection = screen.getByTestId('section-div-#catalog');
    expect(catalogSection.getAttribute('data-id')).toEqual('true');
  });

  test('after scroll section should equal to models and not be equal to slider', () => {
    fireEvent.scroll(window, { target: { scrollY: 2550 } });
    const sliderSection = screen.getByTestId('section-div-#slider');
    const modelsSection = screen.getByTestId('section-div-#models');
    expect(sliderSection.getAttribute('data-id')).not.toEqual('true');
    expect(modelsSection.getAttribute('data-id')).toEqual('true');
  });
});
