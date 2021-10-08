import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
=======
import {useDispatch, useSelector} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';
>>>>>>> f2907b40... roduct-details translations + test
=======
import { useSelector } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
>>>>>>> 3c3006cd... 973/product-submit/test
import ProductSizes from '../product-sizes';

jest.mock('../product-sizes.styles', () => ({
  useStyles: () => ({})
}));

jest.mock('react-redux');
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
Enzyme.configure({adapter: new Adapter()});
=======
Enzyme.configure({ adapter: new Adapter() });
>>>>>>> 3c3006cd... 973/product-submit/test

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
<<<<<<< HEAD

>>>>>>> f2907b40... roduct-details translations + test
=======
>>>>>>> 3c3006cd... 973/product-submit/test
});
