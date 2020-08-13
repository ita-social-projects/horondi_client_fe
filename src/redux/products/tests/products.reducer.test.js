import productsReducer from '../products.reducer';
import { setProductsLoading, setProduct } from '../products.actions';

describe('Products reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      product: null,
      loading: true
    };
  });

  it('should return default state', () => {
    expect(productsReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with new product', () => {
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
    const state = {
      ...initialState,
      product: newProduct
    };

    expect(productsReducer(initialState, setProduct(newProduct))).toEqual(
      state
    );
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(productsReducer(initialState, setProductsLoading(false))).toEqual(
      state
    );
  });
});
