import React from 'react';
import Button from '@material-ui/core/Button';

import ProductSizes from '../product-sizes';
import { sizes } from './product-sizes.variables';

jest.mock('../product-sizes.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');

const handleSizeChange = jest.fn();

const currentSize = {
  id: '1'
};

describe('Product component', () => {
  it('should render buttons for unique sizes names', () => {
    const component = shallow(
      <ProductSizes
        handleSizeChange={handleSizeChange}
        sizes={sizes}
        sizeIsNotSelectedError={false}
        currentSize={currentSize}
      />
    );

    const button = component.find(Button);

    expect(button).toHaveLength(1);
  });
});
