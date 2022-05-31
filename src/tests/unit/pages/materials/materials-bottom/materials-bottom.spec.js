import React from 'react';
import { render } from '@testing-library/react';
import MaterialsBottom from '../../../../../pages/materials/materials-bottom';

const materialsData = [
  {
    _id: '1',
    title: 'Bottom',
    image: 'image1'
  },
  {
    _id: '2',
    title: 'Bottom',
    image: 'image2'
  }
];

const materialsDataEmpty = [];

describe('MaterialsBottom component tests', () => {
  it('should contain carousel list and heading', () => {
    const { getByRole } = render(<MaterialsBottom materialsBottom={materialsData} />);

    const carouselList = getByRole('list');
    const bottomHeading = getByRole('heading');

    expect(carouselList).toBeInTheDocument();
    expect(bottomHeading).toBeInTheDocument();
  });

  it('should not be rendered', () => {
    const { queryByRole } = render(<MaterialsBottom materialsBottom={materialsDataEmpty} />);

    const bottomHeading = queryByRole('heading');

    expect(bottomHeading).toBeNull();
  });
});
