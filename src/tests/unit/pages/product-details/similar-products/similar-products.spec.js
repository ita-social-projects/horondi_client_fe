import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import SimilarProducts from '../../../../../pages/product-details/similar-products/similar-products';
import {
  mockCartList,
  mockFullProduct,
  mockImagesList,
  mockSelector,
  useQueryData
} from './similar-products.variables';
import { getFullProducts, similarProductForCart } from '../../../../../utils/productDetails';
import SimilarProductsItem from '../../../../../pages/product-details/similar-products/similar-products-item';

jest.mock('../../../../../pages/product-details/similar-products', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../../../../../utils/productDetails');

useQuery.mockImplementation(() => ({
  ...useQueryData
}));
useSelector.mockImplementation(() => mockSelector);
getFullProducts.mockImplementation(() => mockFullProduct);
similarProductForCart.mockImplementation(() => mockImagesList);

describe('Similar products test', () => {
  it('Should render SimilarProducts component', () => {
    const wrapper = shallow(<SimilarProducts cartList={mockCartList} />);
    expect(wrapper.find(SimilarProductsItem)).toHaveLength(1);
  });
});
