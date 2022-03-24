import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import CategoryItem from '../category-item';

jest.mock('../category-item.style', () => ({
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

  test('Should render CategoryItem', () => {
    expect(container).toBeInTheDocument();
  });
});
