import productReducer, { initialState } from '../products.reducer';
import {
  setAllFilterProducts,
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

describe('Product reducer test', () => {
  const productsExample = [
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

  it('should return default state', () => {
    expect(productReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with products', () => {
    const state = {
      ...initialState,
      loading: true,
      filtredProducts: productsExample
    };

    expect(
      productReducer(state, setAllFilterProducts(productsExample))
    ).toEqual(state);
  });

  it('should return state with hot item true', () => {
    const state = {
      ...initialState,
      isHotItemFilter: true
    };

    expect(productReducer(state, setHotItemFilter(true))).toEqual(state);
  });

  it('should return state with category filter', () => {
    const categoryFilter = ['54c1cfb719f3bb97c28d762e'];

    const state = {
      ...initialState,
      categoryFilter
    };

    expect(productReducer(state, setCategoryFilter(categoryFilter))).toEqual(
      state
    );
  });

  it('should return state with colors filter', () => {
    const colorsFilter = ['Red', 'Green'];

    const state = {
      ...initialState,
      colorsFilter
    };

    expect(productReducer(state, setColorsFilter(colorsFilter))).toEqual(state);
  });

  it('should return state with patterns filter', () => {
    const patternsFilter = ['Black', 'Human'];

    const state = {
      ...initialState,
      patternsFilter
    };

    expect(productReducer(state, setPatternsFilter(patternsFilter))).toEqual(
      state
    );
  });

  it('should return state with search filter', () => {
    const searchFilter = 'Text';

    const state = {
      ...initialState,
      searchFilter
    };

    expect(productReducer(state, setSearchFilter(searchFilter))).toEqual(state);
  });

  it('should return state with price filter', () => {
    const priceFilter = [100, 1000];

    const state = {
      ...initialState,
      priceFilter
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
