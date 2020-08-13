import {
  setProductsLoading,
  setProduct,
  getProduct
} from '../products.actions';
import {
  SET_PRODUCT,
  SET_PRODUCTS_LOADING,
  GET_PRODUCT
} from '../products.types';

describe('Products actions test', () => {
  it('should set new product to payload property', () => {
    const newProduct = {
      data: {
        getProductsById: {
          name: {
            lang: 'en',
            value: 'Rolltop Pink'
          },
          basePrice: 1450
        }
      }
    };
    const result = {
      type: SET_PRODUCT,
      payload: newProduct
    };

    expect(setProduct(newProduct)).toEqual(result);
  });

  it('should return object with type GET_PRODUCT and product id', () => {
    const productId = 'c3a84a5b9866c30390366168';
    const result = {
      type: GET_PRODUCT,
      payload: productId
    };

    expect(getProduct(productId)).toEqual(result);
  });

  it('should set product loading', () => {
    const result = {
      type: SET_PRODUCTS_LOADING,
      payload: true
    };

    expect(setProductsLoading(true)).toEqual(result);
  });
});
