import {
  getUkrPoshtaRegions,
  getUkrPoshtaDistricts,
  getUkrPoshtaCities,
  getUkrPoshtaStreets
} from '../delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';
import { getConstructorById } from '../../../orders/operations/getConstructorById.queries';
import { getProductById } from '../../../orders/operations/order.queries';

export const ukrPostMockRegions = [
  {
    request: {
      query: getUkrPoshtaRegions
    },
    result: {
      data: {
        getUkrPoshtaRegions: [
          {
            REGION_UA: 'Вінницька',
            REGION_ID: '1'
          }
        ]
      }
    }
  }
];
export const ukrPostMockDistricts = [
  {
    request: {
      query: getUkrPoshtaDistricts
    },
    result: {
      data: {
        getUkrPoshtaDistricts: [
          {
            DISTRICT_UA: 'Гайсинський',
            DISTRICT_ID: '916'
          }
        ]
      }
    }
  }
];

export const ukrPostMockCities = [
  {
    request: {
      query: getUkrPoshtaCities
    },
    result: {
      data: {
        getUkrPoshtaCities: [
          {
            CITY_UA: 'Адамівка',
            CITY_ID: '27942'
          }
        ]
      }
    }
  }
];

export const ukrPostMockStreets = [
  {
    request: {
      query: getUkrPoshtaStreets
    },
    result: {
      data: {
        getUkrPoshtaStreets: [
          {
            STREET_UA: 'Південна'
          }
        ]
      }
    }
  }
];

export const product = {
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
};

export const constructor = {
  id: 1644253698084,
  productId: '619ea7245bbfb0002540bd29',
  sizeAndPrice: {
    price: [
      {
        value: 1783,
        currency: 'UAH'
      },
      {
        value: 64,
        currency: 'USD'
      }
    ],
    size: {
      available: true,
      name: 'M',
      _id: '604394a2a7532c33dcb326d5'
    },
    bottomMaterial: {
      _id: '619e937b5bbfb0002540b7b9',
      translationsKey: '619e937a5bbfb0002540b7b8',
      name: [
        {
          lang: 'ua',
          value: 'Шкіра чорна'
        },
        {
          lang: 'en',
          value: 'Black leather '
        }
      ],
      images: {
        large: 'large_eewk311kwdxcgv1_низ-шкіра-чорна.png',
        medium: 'medium_eewk311kwdxcgv1_низ-шкіра-чорна.png',
        small: 'small_eewk311kwdxcgv1_низ-шкіра-чорна.png',
        thumbnail: 'thumbnail_eewk311kwdxcgv1_низ-шкіра-чорна.png'
      },
      additionalPrice: [
        {
          value: 327,
          currency: 'UAH'
        },
        {
          value: 12,
          currency: 'USD'
        }
      ]
    }
  },
  quantity: 1,
  constructor: {
    isConstructor: true
  },
  category: 'Bags'
};

export const promoCode = {
  getPromoCodeByCode: {
    code: 'test',
    discount: 10,
    categories: ['bags']
  }
};

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

export const mockProduct = [
  {
    request: {
      query: getProductById,
      variables: {
        id: product.productId
      }
    },
    result: {
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
  },
  {
    request: {
      query: getConstructorById,
      variables: {
        id: constructor.productId
      }
    },
    result: {
      data: {
        getConstructorById: {
          __typename: 'Constructor',
          _id: '619ea7245bbfb0002540bd29',
          name: [
            {
              lang: 'ua',
              value: 'Роллтоп'
            },
            {
              lang: 'en',
              value: 'Rolltop'
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
              },
              {
                lang: 'en',
                value: 'Rolltop'
              }
            ],
            images: {
              small: 'small_id73cf0kly0of2u_rolltop.png',
              thumbnail: 'thumbnail_id73cf0kly0of2u_rolltop.png'
            },
            sizes: [
              {
                _id: '604394a2a7532c33dcb326d5',
                name: 'M',
                available: true
              },
              {
                _id: '604394cba7532c33dcb326d6',
                name: 'M',
                available: false
              },
              {
                _id: '60439516a7532c33dcb326d7',
                name: 'S',
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
                },
                {
                  lang: 'en',
                  value: 'Malmo yellow rolltop'
                }
              ],
              additionalPrice: [
                {
                  currency: 'UAH',
                  value: 538
                },
                {
                  currency: 'USD',
                  value: 20
                }
              ]
            },
            {
              _id: '619eb9a45bbfb0002540bf96',
              name: [
                {
                  lang: 'ua',
                  value: 'Мальмо червоний роллтоп'
                },
                {
                  lang: 'en',
                  value: 'Malmo red rolltop'
                }
              ],
              additionalPrice: [
                {
                  currency: 'UAH',
                  value: 538
                },
                {
                  currency: 'USD',
                  value: 20
                }
              ]
            },
            {
              _id: '619eb9d55bbfb0002540bfad',
              name: [
                {
                  lang: 'ua',
                  value: 'Мальмо сірий роллтоп'
                },
                {
                  lang: 'en',
                  value: 'Malmo gray rolltop'
                }
              ],
              additionalPrice: [
                {
                  currency: 'UAH',
                  value: 538
                },
                {
                  currency: 'USD',
                  value: 20
                }
              ]
            },
            {
              _id: '619eba0c5bbfb0002540bfbf',
              name: [
                {
                  lang: 'ua',
                  value: 'Мальмо синій роллтоп'
                },
                {
                  lang: 'en',
                  value: 'Malmo blue rolltop'
                }
              ],
              additionalPrice: [
                {
                  currency: 'UAH',
                  value: 538
                },
                {
                  currency: 'USD',
                  value: 20
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
                  value: 'Шкіра чорна'
                },
                {
                  lang: 'en',
                  value: 'Black leather '
                }
              ],
              features: {
                material: {
                  translationsKey: '61840dc8a40f604a050ce414'
                }
              },
              additionalPrice: [
                {
                  value: 327,
                  currency: 'UAH'
                },
                {
                  value: 12,
                  currency: 'USD'
                }
              ]
            },
            {
              _id: '619e947d5bbfb0002540b7c1',
              name: [
                {
                  lang: 'ua',
                  value: 'Шкіра коричнева '
                },
                {
                  lang: 'en',
                  value: 'Brown leather '
                }
              ],
              features: {
                material: {
                  translationsKey: '61840dc8a40f604a050ce414'
                }
              },
              additionalPrice: [
                {
                  value: 407,
                  currency: 'UAH'
                },
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
                },
                {
                  lang: 'en',
                  value: 'Red'
                }
              ],
              additionalPrice: [
                {
                  value: 56,
                  currency: 'UAH'
                },
                {
                  value: 2,
                  currency: 'USD'
                }
              ]
            },
            {
              _id: '619e25dc5bbfb00025409e4d',
              name: [
                {
                  lang: 'ua',
                  value: 'Сірий квадрат'
                },
                {
                  lang: 'en',
                  value: 'Gray square'
                }
              ],
              additionalPrice: [
                {
                  value: 2,
                  currency: null
                }
              ]
            },
            {
              _id: '619e26a95bbfb0002540a16d',
              name: [
                {
                  lang: 'ua',
                  value: 'Оранжева стрічка'
                },
                {
                  lang: 'en',
                  value: 'Orange ribbon'
                }
              ],
              additionalPrice: [
                {
                  value: 56,
                  currency: 'UAH'
                },
                {
                  value: 2,
                  currency: 'USD'
                }
              ]
            },
            {
              _id: '619e27905bbfb0002540a2f4',
              name: [
                {
                  lang: 'ua',
                  value: 'Сіра стрічка'
                },
                {
                  lang: 'en',
                  value: 'Gray ribbon'
                }
              ],
              additionalPrice: [
                {
                  value: 56,
                  currency: 'UAH'
                },
                {
                  value: 2,
                  currency: 'USD'
                }
              ]
            },
            {
              _id: '619e28845bbfb0002540a370',
              name: [
                {
                  lang: 'ua',
                  value: 'Рожево голубий'
                },
                {
                  lang: 'en',
                  value: 'Pink Blue'
                }
              ],
              additionalPrice: [
                {
                  value: 56,
                  currency: 'UAH'
                },
                {
                  value: 2,
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
