import { getFilteredProductsQuery } from '../../../../pages/product-list-page/operations/product-list.queries';

const items = [
  {
    _id: '605658df158e2fdb53498442',
    category: {
      _id: '6043bdeb3e06ad3edcdb7b2d',
      name: [
        {
          value: 'Рюкзаки '
        },
        {
          value: 'Backpacks'
        }
      ]
    },
    model: {
      _id: '6043bf9e3e06ad3edcdb7b30',
      name: [
        {
          value: 'Роллтоп'
        },
        {
          value: 'Rolltop'
        }
      ]
    },
    name: [
      {
        lang: 'ua',
        value: 'Роллтоп синій'
      },
      {
        lang: 'en',
        value: 'Rolltop blue'
      }
    ],
    mainMaterial: {
      color: {
        _id: '6043a9bb3e06ad3edcdb7b0d',
        name: [
          {
            lang: 'ua',
            value: 'Синій'
          },
          {
            lang: 'en',
            value: 'Blue'
          }
        ],
        simpleName: [
          {
            lang: 'ua',
            value: 'Синій'
          },
          {
            lang: 'en',
            value: 'Blue'
          }
        ]
      }
    },
    images: {
      primary: {
        large: 'large_4051sf11kxg2hbo3_41.png',
        medium: 'medium_4051sf11kxg2hbo3_41.png',
        small: 'small_4051sf11kxg2hbo3_41.png'
      }
    },
    pattern: {
      _id: '619e295b5bbfb0002540a383',
      name: [
        {
          lang: 'ua',
          value: 'Голуба стрічка'
        },
        {
          lang: 'en',
          value: 'Blue ribbon'
        }
      ]
    },
    basePrice: [
      {
        value: 1386.95,
        currency: 'UAH'
      },
      {
        value: 50,
        currency: 'USD'
      }
    ],
    availableCount: 0,
    rate: 5,
    translationsKey: '61af5b8d97e964ccc50e2c27',
    sizes: [
      {
        size: {
          available: true
        },
        price: [
          {
            value: 2150,
            currency: 'UAH'
          },
          {
            value: 77,
            currency: 'USD'
          }
        ]
      },
      {
        size: {
          available: true
        },
        price: [
          {
            value: 2100,
            currency: 'UAH'
          },
          {
            value: 76,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    _id: '605658df158e2fdb53498445',
    category: {
      _id: '6043bdeb3e06ad3edcdb7b2d',
      name: [
        {
          value: 'Рюкзаки '
        },
        {
          value: 'Backpacks'
        }
      ]
    },
    model: {
      _id: '6043bf9e3e06ad3edcdb7b30',
      name: [
        {
          value: 'Роллтоп'
        },
        {
          value: 'Rolltop'
        }
      ]
    },
    name: [
      {
        lang: 'ua',
        value: 'Роллтоп синій'
      },
      {
        lang: 'en',
        value: 'Rolltop blue'
      }
    ],
    mainMaterial: {
      color: {
        _id: '6043a9bb3e06ad3edcdb7b0d',
        name: [
          {
            lang: 'ua',
            value: 'Синій'
          },
          {
            lang: 'en',
            value: 'Blue'
          }
        ],
        simpleName: [
          {
            lang: 'ua',
            value: 'Синій'
          },
          {
            lang: 'en',
            value: 'Blue'
          }
        ]
      }
    },
    images: {
      primary: {
        large: 'large_4051sf11kxg2hbo3_41.png',
        medium: 'medium_4051sf11kxg2hbo3_41.png',
        small: 'small_4051sf11kxg2hbo3_41.png'
      }
    },
    pattern: {
      _id: '619e295b5bbfb0002540a383',
      name: [
        {
          lang: 'ua',
          value: 'Голуба стрічка'
        },
        {
          lang: 'en',
          value: 'Blue ribbon'
        }
      ]
    },
    basePrice: [
      {
        value: 1000,
        currency: 'UAH'
      },
      {
        value: 50,
        currency: 'USD'
      }
    ],
    availableCount: 0,
    rate: 5,
    translationsKey: '61af5b8d97e964ccc50e2c27',
    sizes: [
      {
        size: {
          available: true
        },
        price: [
          {
            value: 1000,
            currency: 'UAH'
          },
          {
            value: 77,
            currency: 'USD'
          }
        ]
      },
      {
        size: {
          available: true
        },
        price: [
          {
            value: 1000,
            currency: 'UAH'
          },
          {
            value: 76,
            currency: 'USD'
          }
        ]
      }
    ]
  }
];

export const mockAllFilteredProducts = [
  {
    request: {
      query: getFilteredProductsQuery,
      variables: { purchasedCount: -1, currency: 0, limit: 9, skip: 0 }
    },
    result: {
      loading: false,
      data: {
        getProducts: {
          __typename: 'PaginatedProducts',
          items,
          count: 1
        }
      }
    }
  }
];
