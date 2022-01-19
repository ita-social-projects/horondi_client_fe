import {
  mockCartList,
  mockFullProduct,
  mockItem
} from '../tests/unit/pages/product-details/similar-products/similar-products.variables';
import { similarProductForCart, getFullProducts } from './productDetails';

const similarProducts = [
  {
    _id: 'some id',
    category: {
      _id: 'some id'
    },
    mainMaterial: {
      color: {
        _id: '6043a9bb3e06ad3edcdb7b0d'
      }
    },
    pattern: {
      _id: '619e295b5bbfb0002540a383'
    }
  }
];

describe('productDetails utils test', () => {
  it('getFullProducts function test', () => {
    const result = getFullProducts([mockItem], mockCartList);
    expect(result).toStrictEqual(mockFullProduct);
  });

  it('similarProductForCart function test', () => {
    const result = similarProductForCart(similarProducts, mockFullProduct);
    expect(result).toStrictEqual(similarProducts);
  });
});
