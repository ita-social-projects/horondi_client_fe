import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductsFiltersContainer from '../products-filters-container';

jest.mock('../products-filters-container.styles.js', () => ({
  useStyles: () => ({})
}));

describe('ProductsFiltersContainer component tests', () => {
  beforeEach(() => {
    render(
      <ProductsFiltersContainer
        productFilter={['6043bdeb3e06ad3edcdb7b2d']}
        list={['Backpacks', 'Bags', 'Accessories']}
        categories={[
          {
            _id: '6043bdeb3e06ad3edcdb7b2d',
            name: [{ value: 'Рюкзаки ' }, { value: 'Backpacks' }]
          },
          {
            _id: '6043be253e06ad3edcdb7b2e',
            name: [{ value: 'Сумки ' }, { value: 'Bags' }]
          },
          {
            _id: '6048f900fc3c0b3b34fd4992',
            name: [{ value: 'Аксесуари' }, { value: 'Accessories' }]
          }
        ]}
        filterHandler={() => ''}
        filterName='Category'
      />
    );
  });
  test('Checkbox click', () => {
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
