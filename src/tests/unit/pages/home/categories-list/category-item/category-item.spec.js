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
  const { container } = render(
    <BrowserRouter>
      <CategoryItem categoryName='testName' categoryImageUrl='testImageUrl' categoryUrl='testUrl' />
    </BrowserRouter>
  );

  test('Should render correct structure of CategoryItem component', () => {
    const linkElement = container.querySelector('div a');
    expect(linkElement.getAttribute('href')).toBe('/testUrl');

    const categoryElement = container.querySelector('div a span');
    expect(categoryElement.textContent).toBe('testName');

    const svgElement = container.querySelector('div a div svg');
    expect(svgElement).toBeInTheDocument();
  });
});
