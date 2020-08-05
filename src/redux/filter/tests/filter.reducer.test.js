import filterReducer from '../filter.reducer';
import {
  setAllFilterProducts,
  setCategoryFilter,
  setColorsFilter,
  setPatternsFilter,
  setPriceFilter,
  setLoading,
  setSearchFilter
} from '../filter.actions';

describe('Filter reducer test', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: true,
      currentPage: 0,
      productsPerPage: 9,
      sortByPrice: 0,
      isHotItem: true,
      sortByRate: 0,
      sortByPopularity: -1,
      colorsFilter: [],
      patternsFilter: [],
      categoryFilter: undefined,
      priceFilter: [],
      searchFilter: '',
      products: []
    };
  });

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
    expect(filterReducer(initialState, {})).toEqual(initialState);
  });

  it('should return state with products', () => {
    const state = {
      ...initialState,
      loading: true,
      products: productsExample
    };

    expect(filterReducer(state, setAllFilterProducts(productsExample))).toEqual(
      state
    );
  });

  it('should return state with category filter', () => {
    const categoryFilter = ['54c1cfb719f3bb97c28d762e'];

    const state = {
      ...initialState,
      categoryFilter
    };

    expect(filterReducer(state, setCategoryFilter(categoryFilter))).toEqual(
      state
    );
  });

  it('should return state with colors filter', () => {
    const colorsFilter = ['Red', 'Green'];

    const state = {
      ...initialState,
      colorsFilter
    };

    expect(filterReducer(state, setColorsFilter(colorsFilter))).toEqual(state);
  });

  it('should return state with patterns filter', () => {
    const patternsFilter = ['Black', 'Human'];

    const state = {
      ...initialState,
      patternsFilter
    };

    expect(filterReducer(state, setPatternsFilter(patternsFilter))).toEqual(
      state
    );
  });

  it('should return state with search filter', () => {
    const searchFilter = 'Text';

    const state = {
      ...initialState,
      searchFilter
    };

    expect(filterReducer(state, setSearchFilter(searchFilter))).toEqual(state);
  });

  it('should return state with price filter', () => {
    const priceFilter = [100, 1000];

    const state = {
      ...initialState,
      priceFilter
    };

    expect(filterReducer(state, setPriceFilter(priceFilter))).toEqual(state);
  });

  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: false
    };

    expect(filterReducer(initialState, setLoading(false))).toEqual(state);
  });
  it('should set loading to false', () => {
    const state = {
      ...initialState,
      loading: true
    };

    expect(filterReducer(initialState, setLoading(true))).toEqual(state);
  });
});
