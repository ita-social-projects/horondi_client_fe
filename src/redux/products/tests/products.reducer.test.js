import productReducer, { initialState } from '../products.reducer';
import {
  setAllProducts,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setLoading,
  setSearchFilter,
  setHotItemFilter,
  setPagesCount,
  setCurrentPage,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity
} from '../products.actions';
import productsExample from './products.mocks';

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

    expect(productReducer(state, setAllProducts(productsExample))).toEqual(
      state
    );
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

    expect(productReducer(state, setCategoryFilter(categoryFilter))).toEqual(
      state
    );
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

    expect(productReducer(state, setPatternsFilter(patternsFilter))).toEqual(
      state
    );
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
      loading: false
    };

    expect(productReducer(initialState, setLoading(false))).toEqual(state);
  });
  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(productReducer(initialState, setLoading(true))).toEqual(state);
  });

  it('should set pages count to 10', () => {
    const state = {
      ...initialState,
      pagesCount: 10
    };
    expect(productReducer(initialState, setPagesCount(10))).toEqual(state);
  });
  it('should set current page to 4', () => {
    const state = {
      ...initialState,
      currentPage: 4
    };
    expect(productReducer(initialState, setCurrentPage(5))).toEqual(state);
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
    expect(productReducer(initialState, setSortByPopularity(-1))).toEqual(
      state
    );
  });
});
