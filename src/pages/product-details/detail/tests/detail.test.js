import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from '../detail';

jest.mock('../detail.styles', () => ({
  useStyles: () => ({})
}));

const mockDetails = {
  subtitle: 'Volume(L)',
  description: 22
};

describe('Detail component', () => {
  beforeEach(() => {
    render(<Detail subtitle={mockDetails.subtitle} description={mockDetails.description} />);
  });
  it('Should render subtitle', () => {
    expect(screen.getByText('Volume(L)')).toBeInTheDocument();
  });
  it('Should render concat', () => {
    expect(screen.getByText(/-/)).toBeInTheDocument();
  });
  it('Should render description', () => {
    expect(screen.getByText('22')).toBeInTheDocument();
  });
});
