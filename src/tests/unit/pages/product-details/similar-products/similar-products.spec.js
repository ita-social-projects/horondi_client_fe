import React from 'react';
import { useQuery } from '@apollo/client';
import SimilarProducts from '../../../../../pages/product-details/similar-products/similar-products';
import {
  mockCartList,
  mockFullProduct,
  mockImagesList,
  useQueryData
} from './similar-products.variables';
import { getFullProducts, similarProductForCart } from '../../../../../utils/productDetails';
import SimilarProductsItem from '../../../../../pages/product-details/similar-products/similar-products-item';
import { DollarIcon } from '../../../../../images/profile-icons';

const mockGetPriceWithCurrency = jest.fn(() => 50);
const mockGetCurrencySign = jest.fn(() => <DollarIcon />);

jest.mock('../../../../../pages/product-details/similar-products', () => ({
  useStyles: () => ({})
}));
jest.mock('react-redux');
jest.mock('@apollo/client');
jest.mock('../../../../../utils/productDetails');

useQuery.mockImplementation(() => ({
  ...useQueryData
}));
getFullProducts.mockImplementation(() => mockFullProduct);
similarProductForCart.mockImplementation(() => mockImagesList);

jest.mock('../../../../../hooks/use-currency', () => ({
  useCurrency: () => ({
    getPriceWithCurrency: mockGetPriceWithCurrency,
    getCurrencySign: mockGetCurrencySign
  })
}));

describe('Similar products test', () => {
  it('Should render SimilarProducts component', () => {
    const wrapper = shallow(<SimilarProducts cartList={mockCartList} />);
    expect(wrapper.find(SimilarProductsItem)).toHaveLength(1);
  });
});
