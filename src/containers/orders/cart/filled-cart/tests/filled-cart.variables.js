import { getPromoCodeByCode } from '../../../operations/getPromoCodeByCode.queries';
import { getCertificateByParams } from '../../../operations/getCertificateByParams.queries';
import { addProductFromConstructor } from '../../../../../pages/cart/operations/cart.mutations';
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
      price: 36
    },
    quantity: 1,
    constructor: false,
    category: 'Bags'
  }
];

export const mockPromoCode = {
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
};

export const mockCertificate = {
  request: {
    query: getCertificateByParams,
    variables: {
      params: {
        name: 'HOR40315176'
      }
    }
  },
  result: {
    data: {
      getCertificateByName: {
        dateEnd: '2023-07-20T15:06:30.256Z',
        dateStart: '2022-07-19T15:06:30.256Z',
        isActivated: true,
        isExpired: false,
        isUsed: false,
        name: 'HOR40315176',
        value: 17,
        _id: '62d6cab33cb3cc2908fc7d61',
        __typename: 'PaginatedCertificate'
      }
    }
  }
};

const productFromConstructorVariables = {
  product: {
    name: [
      {
        lang: 'ua',
        value: 'ололлоллоолл'
      },
      {
        lang: 'en',
        value: 'uytyrjyututyu'
      }
    ],
    model: '6043bf9e3e06ad3edcdb7b30',
    pattern: '619e26a95bbfb0002540a16d',
    mainMaterial: {
      material: '6043a1f33e06ad3edcdb7b09',
      color: '6043a99c3e06ad3edcdb7b0c'
    },
    bottomMaterial: {
      material: '6043ac5d3e06ad3edcdb7b13',
      color: '6043a9cc3e06ad3edcdb7b0e'
    },
    sizes: ['604394a2a7532c33dcb326d5'],
    basePrice: 90
  },
  upload: []
};

export const mockProductFromConstructor = {
  request: {
    query: addProductFromConstructor,
    variables: {
      ...productFromConstructorVariables
    }
  },
  result: {
    data: {
      addProductFromConstructor: {
        __typename: 'Product',
        _id: '620fc7a2ada7db5c08df6d14',
        name: [
          {
            value: 'олололололло',
            lang: 'ua'
          },
          {
            value: 'uytyrjyututyu',
            lang: 'en'
          }
        ],
        translationsKey: '620fc7a2ada7db5c08df6d13',
        bottomMaterial: {
          material: {
            translationsKey: '61840dc8a40f604a050ce414'
          }
        },
        images: null,
        sizes: [
          {
            size: {
              _id: '604394a2a7532c33dcb326d5',
              name: 'M',
              available: true
            },
            price: 111
          }
        ]
      }
    }
  }
};

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
    basePrice: 50,
    availableCount: 0,
    rate: 5,
    translationsKey: '61af5b8d97e964ccc50e2c27',
    sizes: [
      {
        size: {
          available: true
        },
        price: 75
      }
    ]
  }
];

export const itemData = {
  sizeAndPrice: {
    price: 60,
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
