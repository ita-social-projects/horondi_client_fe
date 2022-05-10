import React from 'react';
import { screen, render, within, fireEvent } from '@testing-library/react';
import {} from '@testing-library/dom';
import Worldwide from '../worldwide';
import { props } from './worldwide.variables';

jest.mock('../../../../../../services/worldwide-delivery.service', () => ({
  getCountries: jest.fn().mockResolvedValue([]),
  getStatesByCountry: jest.fn().mockResolvedValue([]),
  getCitiesByCountryAndState: jest.fn().mockResolvedValue([])
}));

document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document
  }
});

describe('tests for worldwide delivery component', () => {
  it('worldwide delivery component should be rendered correctly', () => {
    render(<Worldwide {...props} />);

    const heading = screen.getByRole('heading', { level: 3 });

    const statesWrapper = screen.getByTestId('stateOrProvince');
    const statesInput = within(statesWrapper).getByRole('textbox');

    expect(heading).toBeInTheDocument();
    expect(statesInput).toHaveAttribute('disabled');
  });

  it('test typing in worldwideCity input', () => {
    render(<Worldwide {...props} values={{ worldWideCountry: 'Ukraine' }} />);

    const citiesWrapper = screen.getByTestId('worldWideCity');
    const citiesInput = within(citiesWrapper).getByRole('textbox');

    fireEvent.change(citiesInput, { target: { value: 'city' } });
    expect(citiesInput).toHaveAttribute('value', 'city');
  });
});
