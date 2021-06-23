import productReducer, { initialState } from '../products.reducer';
import {
  setAllProducts,
  setAllFilterData,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setProductsLoading,
  setSearchFilter,
  setHotItemFilter,
  setPagesCount,
  setCurrentPage,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity,
  setCountPerPage,
  setModelsFilter,
  setProduct,
  setProductLoading,
  changeFilterStatus
} from '../products.actions';
import { productsExample } from './products.mocks';

describe('Product reducer test', () => {
  it('should return default state', () => {
    expect(productReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with products', () => {
    const state = {
      ...initialState,
      loading: true,
      products: productsExample
    };

    expect(productReducer(state, setAllProducts(productsExample))).toEqual(state);
  });

  it('should return state with filter data', () => {
    const state = {
      ...initialState,
      loading: true,
      filterData: productsExample
    };

    expect(productReducer(state, setAllFilterData(productsExample))).toEqual(state);
  });

  it('should return state with models filter', () => {
    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        modelsFilter: ['Rolltop']
      }
    };

    expect(productReducer(state, setModelsFilter(['Rolltop']))).toEqual(state);
  });

  it('should return state with hot item true', () => {
    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        isHotItemFilter: true
      }
    };

    expect(productReducer(state, setHotItemFilter(true))).toEqual(state);
  });

  it('should return state with category filter', () => {
    const categoryFilter = ['54c1cfb719f3bb97c28d762e'];

    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        categoryFilter
      }
    };

    expect(productReducer(state, setCategoryFilter(categoryFilter))).toEqual(state);
  });

  it('should return state with colors filter', () => {
    const colorsFilter = ['Red', 'Green'];

    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        colorsFilter
      }
    };

    expect(productReducer(state, setColorsFilter(colorsFilter))).toEqual(state);
  });

  it('should return state with patterns filter', () => {
    const patternsFilter = ['Black', 'Human'];

    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        patternsFilter
      }
    };

    expect(productReducer(state, setPatternsFilter(patternsFilter))).toEqual(state);
  });

  it('should return state with search filter', () => {
    const searchFilter = 'Text';

    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        searchFilter
      }
    };

    expect(productReducer(state, setSearchFilter(searchFilter))).toEqual(state);
  });

  it('should return state with price filter', () => {
    const priceFilter = [100, 1000];

    const state = {
      ...initialState,
      filters: {
        ...initialState.filters,
        priceFilter
      }
    };
    expect(productReducer(state, setPriceFilter(priceFilter))).toEqual(state);
  });

  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(productReducer(initialState, setProductsLoading(true))).toEqual(state);
  });

  it('should set pages count to 10', () => {
    const state = {
      ...initialState,
      pagesCount: 10
    };
    expect(productReducer(initialState, setPagesCount(10))).toEqual(state);
  });
  it('should set current page to 3', () => {
    const state = {
      ...initialState,
      currentPage: 4
    };
    expect(productReducer(initialState, setCurrentPage(4))).toEqual(state);
  });
  it('should set s0rt by price to 1', () => {
    const state = {
      ...initialState,
      sortByPopularity: 0,
      sortByPrice: 1
    };
    expect(productReducer(initialState, setSortByPrice(1))).toEqual(state);
  });
  it('should set s0rt by rate to 1', () => {
    const state = {
      ...initialState,
      sortByPopularity: 0,
      sortByRate: 1
    };
    expect(productReducer(initialState, setSortByRate(1))).toEqual(state);
  });
  it('should set s0rt by popularity to -1', () => {
    const state = {
      ...initialState,
      sortByRate: 0,
      sortByPopularity: -1
    };
    expect(productReducer(initialState, setSortByPopularity(-1))).toEqual(state);
  });
  it('products per page in store should be set to 18', () => {
    const state = {
      ...initialState,
      countPerPage: 18
    };
    expect(productReducer(initialState, setCountPerPage(18))).toEqual(state);
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

    expect(productReducer(initialState, setProduct(newProduct))).toEqual(state);
  });

  it('should set product loading to false', () => {
    const state = {
      ...initialState,
      productLoading: false
    };

    expect(productReducer(initialState, setProductLoading(false))).toEqual(state);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(productReducer(initialState, setProductsLoading(false))).toEqual(state);
  });
  it('should set filter status to true', () => {
    const state = {
      ...initialState,
      filterStatus: true
    };
    expect(productReducer(initialState, changeFilterStatus(true))).toEqual(state);
  });
});
