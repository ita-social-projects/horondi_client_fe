import React from 'react';
import ProductSizes from '../product-sizes';

jest.mock('../product-sizes.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

const size = {
  _id: '1'
};

const handleSizeChange = jest.fn();
const sizes = [
  {
    size
  }
];
const currentSize = {
  id: '1'
};

describe('Product component', () => {
  it('Should render', () => {
    const component = shallow(
      <ProductSizes
        handleSizeChange={handleSizeChange}
        sizes={sizes}
        sizeIsNotSelectedError={false}
        currentSize={currentSize}
      />
    );
    expect(component).toBeDefined();
  });
});
