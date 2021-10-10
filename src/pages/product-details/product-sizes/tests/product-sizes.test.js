import React from 'react';
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ProductSizes from '../product-sizes';

jest.mock('../product-sizes.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');
Enzyme.configure({ adapter: new Adapter() });

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

  it('Should render', () => {
    const component = shallow(
      <ProductSizes handleSizeChange={handleSizeChange} sizes={sizes} sizeIsNotSelectedError />
    );
    expect(component).toBeDefined();
  });

  it('Should render', () => {
    const component = shallow(
      <ProductSizes handleSizeChange={handleSizeChange} sizes={sizes} sizeIsNotSelectedError />
    );
  });
});
