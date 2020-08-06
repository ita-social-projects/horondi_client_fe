import {
  setAllFilterProducts,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setLoading,
  setSearchFilter,
  setHotItemFilter,
  getFiltredProducts
} from '../filter.actions';
import {
  SET_ALL_FILTER_PRODUCTS,
  GET_FILTRED_PRODUCTS,
  SET_LOADING,
  SET_CATEGORY_FILTER,
  SET_PRICE_FILTER,
  SET_COLORS_FILTER,
  SET_PATTERNS_FILTER,
  SET_SEARCH,
  SET_HOT_ITEMS_FILTER
} from '../filter.types';

describe('Filter actions test', () => {
  it('should set all filtred products to payload property', () => {
    const products = [
      {
        name: [
          {
            value: 'Сумка синя'
          },
          {
            value: 'Bag Blue'
          }
        ],
        basePrice: 900,
        rate: 3.8,
        images: [
          {
            primary: {
              medium: 'medium-primary_19.jpg'
            }
          }
        ]
      },
      {
        name: [
          {
            value: 'Бананка рожева'
          },
          {
            value: 'Fanny Pack Pink'
          }
        ],
        basePrice: 500,
        rate: 3.7,
        images: [
          {
            primary: {
              medium: 'medium-primary_25.jpg'
            }
          }
        ]
      }
    ];
    const result = {
      type: SET_ALL_FILTER_PRODUCTS,
      payload: products
    };

    expect(setAllFilterProducts(products)).toEqual(result);
  });

  it('should set hot items filter to payload property', () => {
    const isHot = true;
    const result = {
      type: SET_HOT_ITEMS_FILTER,
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
});
