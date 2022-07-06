import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../detail';

jest.mock('../detail.styles', () => ({
  useStyles: () => ({})
}));

const mockDetails = {
  subtitle: 'Volume(L)',
  description: '22'
};

describe('Detail component', () => {
  beforeEach(() => {
    render(<Detail subtitle={mockDetails.subtitle} description={mockDetails.description} />);
  });
  it('Should render subtitle', () => {
    expect(screen.getByText(mockDetails.subtitle)).toBeInTheDocument();
  });

  it('Should render description', () => {
    expect(screen.getByText(mockDetails.description)).toBeInTheDocument();
  });
});
