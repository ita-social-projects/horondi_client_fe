export const mockedProps = {
  currency: 0,
  checkoutFormBtnValue: jest.fn(),
  consentLink: 'Link',
  t: jest.fn(),
  styles: {},
  language: 0,
  setPricesFromQuery: jest.fn(),
  deliveryType: '',
  promoCode: {
    getPromoCodeByCode: {
      code: 'test',
      discount: 10,
      categories: ['bags']
    }
  }
};

export const ids = ['1637938395612', '1637938905565'];

export const mockedCartItemsData = [
  {
    id: 1644262606242,
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

export const mockTranslationsKey = '61840da5a40f604a050ce412';
export const mockNameUA = 'Test Product UA';
export const mockNameEN = 'Test Product EN';

export const mockQueryData = {
  __typename: 'Product',
  _id: '61938f3f47ff1a3ccc1ac5e7',
  category: {
    code: 'bags'
  },
  name: [
    {
      lang: 'ua',
      value: mockNameUA
    },
    {
      lang: 'en',
      value: mockNameEN
    }
  ],
  bottomMaterial: {
    material: {
      translationsKey: mockTranslationsKey
    }
  },
  images: {
    primary: {
      thumbnail: 'thumbnail_hd0lc0ckw1zhymv_photo_2021-11-16_10-30-29.jpg'
    }
  },
  sizes: [
    {
      size: {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L'
      },
      price: [
        {
          value: 1000,
          currency: 'UAH'
        },
        {
          value: 37,
          currency: 'USD'
        }
      ]
    },
    {
      size: {
        _id: '604394cba7532c33dcb326d6',
        name: 'M'
      },
      price: [
        {
          value: 950,
          currency: 'UAH'
        },
        {
          value: 36,
          currency: 'USD'
        }
      ]
    }
  ]
};

const mockQueryDataConstructor = {
  __typename: 'Constructor',
  _id: '619ea7245bbfb0002540bd29',
  category: {
    code: 'bags'
  },
  name: [
    {
      lang: 'ua',
      value: 'Роллтоп'
    }
  ],
  images: null,
  model: {
    _id: '6043bf9e3e06ad3edcdb7b30',
    translationsKey: '618274d30b77eeacb098c617',
    name: [
      {
        lang: 'ua',
        value: 'Роллтоп'
      }
    ],
    images: {
      thumbnail: 'thumbnail_id73cf0kly0of2u_rolltop.png'
    },
    sizes: [
      {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L',
        available: true
      }
    ]
  },
  basics: [
    {
      _id: '619eb96c5bbfb0002540bf84',
      name: [
        {
          lang: 'ua',
          value: 'Мальмо жовтий роллтоп'
        }
      ],
      additionalPrice: [
        {
          currency: 'UAH',
          value: 538
        }
      ]
    },
    {
      _id: '619eb9a45bbfb0002540bf96',
      name: [
        {
          lang: 'ua',
          value: 'Мальмо червоний роллтоп'
        }
      ]
    }
  ],
  bottoms: [
    {
      _id: '619e937b5bbfb0002540b7b9',
      name: [
        {
          lang: 'ua',
          value: 'Шкіра чорна '
        }
      ],
      additionalPrice: [
        {
          value: 326,
          currency: 'UAH'
        }
      ]
    },
    {
      _id: '619e947d5bbfb0002540b7c1',
      name: [
        {
          lang: 'en',
          value: 'Brown leather '
        }
      ],

      additionalPrice: [
        {
          value: 15,
          currency: 'USD'
        }
      ]
    }
  ],
  patterns: [
    {
      _id: '619e24c25bbfb00025409bf3',
      name: [
        {
          lang: 'ua',
          value: 'Червоний'
        }
      ],
      additionalPrice: [
        {
          value: 55,
          currency: 'UAH'
        }
      ]
    },
    {
      _id: '619e28845bbfb0002540a370',
      name: [
        {
          lang: 'ua',
          value: 'Рожево голубий'
        }
      ]
    }
  ]
};

export const mockPromoCode = {
  getPromoCodeByCode: {
    code: 'test',
    discount: 10,
    categories: ['bags']
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
