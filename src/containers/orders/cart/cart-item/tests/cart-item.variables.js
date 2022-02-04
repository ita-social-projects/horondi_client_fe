import { getProductById } from '../../../operations/order.queries';

export const item = {
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
  constructor: {},
  category: 'Bags'
};

export const constructor = {
  id: '61c361217eeb571938b4ecb8',
  productId: '61938f3f47ff1a3ccc1ac5e7',
  sizeAndPrice: {
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
    ],
    bottomMaterial: {
      additionalPrice: [
        { value: 326, currency: 'UAH' },
        { value: 12, currency: 'USD' }
      ],
      images: {
        thumbnail: 'thumbnail_eewk311kwdxcgv1_низ-шкіра-чорна.png'
      },
      name: [
        { lang: 'ua', value: 'Шкіра чорна' },
        { lang: 'en', value: 'Black leather' }
      ],
      translationsKey: '619e937a5bbfb0002540b7b8',
      _id: '619e937b5bbfb0002540b7b9'
    }
  },
  quantity: 4,
  constructor: { a: 1 },
  category: {
    code: 'bags'
  }
};

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

export const props = {
  item,
  promoCode: {
    getPromoCodeByCode: {
      code: 'test',
      discount: 10,
      categories: ['bags']
    }
  },
  setModalVisibility: jest.fn(),
  setModalItem: jest.fn()
};

export const mockQueryData = {
  __typename: 'Product',
  _id: '61938f3f47ff1a3ccc1ac5e7',
  category: {
    code: 'bags'
  },
  name: [
    {
      lang: 'ua',
      value: 'Test product UA'
    },
    {
      lang: 'en',
      value: 'Test product EN'
    }
  ],
  bottomMaterial: {
    material: {
      translationsKey: '61938f3f47ff1a3ccc1ac5e2'
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

export const mockQueryDataConstructor = {
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

export const mockProduct = [
  {
    request: {
      query: getProductById,
      variables: {
        id: '605660d9158e2fdb53498490'
      }
    },
    result: {
      called: false,
      data: {
        getProductById: {
          __typename: 'Product',
          _id: '605660d9158e2fdb53498490',
          category: {
            code: 'bags'
          },
          translationsKey: '61af5c3897e964ccc50e2c2b',
          bottomMaterial: {
            material: {
              translationsKey: '61840dc8a40f604a050ce414'
            }
          },
          images: {
            primary: {
              thumbnail: 'thumbnail_4051sf11kxg1bqc1_97.png'
            }
          },
          sizes: [
            {
              size: {
                _id: '60439516a7532c33dcb326d7',
                name: 'S',
                available: true
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
            {
              size: {
                _id: '604787abfc3c0b3b34fd485a',
                name: 'M',
                available: true
              },
              price: [
                {
                  value: 1050,
                  currency: 'UAH'
                },
                {
                  value: 38,
                  currency: 'USD'
                }
              ]
            }
          ]
        }
      }
    }
  }
];
