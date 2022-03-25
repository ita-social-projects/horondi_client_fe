import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import CategoryItem from '../../../../../../pages/home/categories-list/category-item/category-item';

jest.mock('../../../../../../pages/home/categories-list/category-item/category-item.style', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

const mockDispatch = jest.fn();

useDispatch.mockReturnValue(mockDispatch);

describe('CategoryItem component tests', () => {
  const mockProps = {
    categoryName: 'testName',
    categoryImageUrl: 'testImage',
    categoryUrl: 'testUrl'
  };

  const { getByRole, getAllByText } = render(
    <BrowserRouter>
      <CategoryItem {...mockProps} />
    </BrowserRouter>
  );

  test('Should render CategoryItem component', () => {
    const linkElement = getByRole('link');
    expect(linkElement.getAttribute('href')).toBe('/testUrl');

    const contentText = getAllByText(/testName/);
    expect(contentText).toHaveLength(2);
  });
});
