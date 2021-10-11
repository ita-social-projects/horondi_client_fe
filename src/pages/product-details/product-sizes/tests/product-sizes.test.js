import React from 'react';
import { useSelector } from 'react-redux';
import ProductSizes from '../product-sizes';

jest.mock('../product-sizes.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

const size = {
  _id: '1'
};

useSelector.mockImplementation(() => ({ size }));

const handleSizeChange = jest.fn();
const sizes = [
  {
    size
  }
];

describe('Product component', () => {
  it('Should render', () => {
    const component = shallow(
      <ProductSizes
        handleSizeChange={handleSizeChange}
        sizes={sizes}
        sizeIsNotSelectedError={false}
      />
    );
    expect(component).toBeDefined();
  });
});
