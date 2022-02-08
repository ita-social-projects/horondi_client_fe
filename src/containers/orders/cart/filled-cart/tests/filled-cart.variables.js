import { getPromoCodeByCode } from '../../../operations/getPromoCodeByCode.queries';
import { mockQueryData, mockQueryDataConstructor } from '../../cart-item/tests/cart-item.variables';

export const items = [
  {
    id: 1643824795572,
    productId: '605660d9158e2fdb53498490',
    sizeAndPrice: {
      size: {
        available: true,
        _id: '60439516a7532c33dcb326d7',
        name: 'S',
        heightInCm: 35,
        widthInCm: 26,
        depthInCm: 14,
        volumeInLiters: 18,
        weightInKg: 0.8
      },
      price: [
        {
          value: 1000,
          currency: 'UAH'
        },
        {
          value: 36,
          currency: 'USD'
        }
      ]
    },
    quantity: 1,
    constructor: false,
    category: 'Bags'
  }
];

export const mockPromoCode = [
  {
    request: {
      query: getPromoCodeByCode,
      variables: {
        code: 'test'
      }
    },
    result: {
      data: {
        getPromoCodeByCode: {
          __typename: 'PromoCode',
          _id: '61edc27490ffbc28a4853000',
          code: 'test',
          discount: 10,
          categories: ['bags']
        }
      }
    }
  }
];

export const mockFilteredProducts = [
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
        value: 1398.12,
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
            value: 2100,
            currency: 'UAH'
          },
          {
            value: 75,
            currency: 'USD'
          }
        ]
      }
    ]
  }
];

export const itemData = {
  sizeAndPrice: {
    price: [
      {
        value: 2100
      }
    ],
    size: {
      _id: '',
      name: 'S'
    }
  },
  category: {
    code: 'bags'
  }
};

export const mockUseLazyQuery = [
  jest.fn(),
  {
    loading: false,
    error: null,
    data: {
      getProductById: mockQueryData,
      getConstructorById: mockQueryDataConstructor,
      getPromoCodeByCode: {
        code: 'test',
        discount: 10,
        categories: ['bags']
      }
    },
    called: false
  }
];

export const mockUseQuery = {
  loading: false,
  error: null,
  data: {
    getFilteredProductsQuery: mockFilteredProducts
  },
  called: false
};
