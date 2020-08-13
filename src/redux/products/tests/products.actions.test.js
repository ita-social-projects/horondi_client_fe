import {
  setAllFilterProducts,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setLoading,
  setSearchFilter,
  setHotItemFilter,
  getFiltredProducts,
  setSortByPrice,
  setSortByRate,
  setSortByPopularity,
  setPagesCount,
  setCurrentPage
} from '../products.actions';
import {
  SET_ALL_FILTER_PRODUCTS,
  GET_FILTRED_PRODUCTS,
  SET_LOADING,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_COLORS_FILTER,
  SET_PATTERNS_FILTER,
  SET_SEARCH,
  SET_HOT_ITEM_FILTER,
  SET_SORT_BY_PRICE,
  SET_SORT_BY_RATE,
  SET_SORT_BY_POPULARITY,
  SET_PAGES_COUNT,
  SET_CURRENT_PAGE
} from '../products.types';
import productsExample from './products.mocks';

describe('Filter actions test', () => {
  it('should set all filtred products to payload property', () => {
    const result = {
      type: SET_ALL_FILTER_PRODUCTS,
      payload: productsExample
    };

    expect(setAllFilterProducts(productsExample)).toEqual(result);
  });

  it('should set hot items filter to payload property', () => {
    const isHot = true;
    const result = {
      type: SET_HOT_ITEM_FILTER,
      payload: isHot
    };

    expect(setHotItemFilter(isHot)).toEqual(result);
  });

  it('should set category filter to payload property', () => {
    const categoryFilter = [
      '54c1cfb719f3bb97c28d762e',
      'ddc81f5dbac48c38d0403dd3'
    ];
    const result = {
      type: SET_CATEGORY_FILTER,
      payload: categoryFilter
    };

    expect(setCategoryFilter(categoryFilter)).toEqual(result);
  });

  it('should set colors filter to payload property', () => {
    const colorsFilter = ['red', 'green'];
    const result = {
      type: SET_COLORS_FILTER,
      payload: colorsFilter
    };

    expect(setColorsFilter(colorsFilter)).toEqual(result);
  });

  it('should set patterns filter to payload property', () => {
    const patternsFilter = ['black', 'human'];
    const result = {
      type: SET_PATTERNS_FILTER,
      payload: patternsFilter
    };

    expect(setPatternsFilter(patternsFilter)).toEqual(result);
  });

  it('should set search to payload property', () => {
    const search = 'Rol';
    const result = {
      type: SET_SEARCH,
      payload: search
    };

    expect(setSearchFilter(search)).toEqual(result);
  });

  it('should set price to payload property', () => {
    const price = [200, 400];
    const result = {
      type: SET_PRICE_FILTER,
      payload: price
    };

    expect(setPriceFilter(price)).toEqual(result);
  });

  it('should return all products', () => {
    const result = {
      type: GET_FILTRED_PRODUCTS
    };

    expect(getFiltredProducts()).toEqual(result);
  });
});

describe('loading action', () => {
  test('should return loading = true', () => {
    expect(setLoading(true)).toEqual({
      type: SET_LOADING,
      payload: true
    });
  });
  test('should return loading = false', () => {
    expect(setLoading(false)).toEqual({
      type: SET_LOADING,
      payload: false
    });
  });

  test('should return current page payload = 5', () => {
    expect(setCurrentPage(5)).toEqual({
      type: SET_CURRENT_PAGE,
      payload: 5
    });
  });

  test('should return sort by price payload = -1', () => {
    expect(setSortByPrice(-1)).toEqual({
      type: SET_SORT_BY_PRICE,
      payload: -1
    });
  });

  test('should return sort by rate payload = -1', () => {
    expect(setSortByRate(-1)).toEqual({
      type: SET_SORT_BY_RATE,
      payload: -1
    });
  });

  test('should return sort by popularity payload = 1', () => {
    expect(setSortByPopularity(1)).toEqual({
      type: SET_SORT_BY_POPULARITY,
      payload: 1
    });
  });

  test('should set pages count', () => {
    expect(setPagesCount(10)).toEqual({
      type: SET_PAGES_COUNT,
      payload: 10
    });
  });
});
