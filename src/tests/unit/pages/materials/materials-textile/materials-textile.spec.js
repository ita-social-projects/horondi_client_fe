import React from 'react';
import { render } from '@testing-library/react';
import MaterialsTextile from '../../../../../pages/materials/materials-textile';

const materialsData = [
  {
    _id: '1',
    title: 'Malmo',
    image: 'image1'
  },
  {
    _id: '2',
    title: 'Malmo',
    image: 'image2'
  }
];

const materialsDataEmpty = [];

describe('MaterialsTextile component tests', () => {
  it('should contain two elements', () => {
    const { getAllByText, getAllByRole } = render(
      <MaterialsTextile materialsTextile={materialsData} />
    );

    const elemTitle = getAllByText(/Malmo/);
    const elemImg = getAllByRole('img');

    expect(elemTitle).toHaveLength(2);
    expect(elemImg).toHaveLength(2);
  });

  it('should not be rendered', () => {
    const { queryByRole } = render(<MaterialsTextile materialsTextile={materialsDataEmpty} />);

    const elemHeading = queryByRole('heading');

    expect(elemHeading).toBeNull();
  });
});
