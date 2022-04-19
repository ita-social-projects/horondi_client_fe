import { getConstructorByModel } from '../../../../pages/images-constructor/operations/getConstructorByModel.queries';

export const translationsKey = '61af3a903822cdd2c488175d';

export const nullProduct = {
  quantity: 1,
  fixedPrice: [
    {
      currency: 'UAH',
      value: 1000
    },
    {
      currency: 'USD',
      value: 37
    }
  ],
  options: {
    size: {
      name: 'M'
    }
  },
  product: null
};

export const item = {
  quantity: 1,
  fixedPrice: [
    {
      currency: 'UAH',
      value: 1000
    },
    {
      currency: 'USD',
      value: 37
    }
  ],
  options: {
    size: {
      name: 'M'
    }
  },
  product: {
    _id: '614cde2bde89a90024988075',
    translationsKey,
    model: {
      _id: '6043bf9e3e06ad3edcdb7b30',
      sizes: [
        {
          name: 'M'
        },
        {
          name: 'S'
        }
      ]
    },
    images: {
      primary: {
        thumbnail: 'thumbnail_eewk311kwgji24t_bagshop.png'
      }
    },
    bottomMaterial: {
      material: {
        translationsKey: '61840da5a40f604a050ce412'
      }
    },
    mainMaterial: {
      color: { _id: '6043a9f53e06ad3edcdb7b0f' },
      material: { _id: '6043a1f33e06ad3edcdb7b09' }
    },
    pattern: {
      _id: '619e24c25bbfb00025409bf3',
      constructorImg: 'small_eewk311kwdgh3ty_гобелен-5.png'
    }
  }
};
export const mockConstructor = [
  {
    request: {
      query: getConstructorByModel,
      variables: {
        id: '6043bf9e3e06ad3edcdb7b30'
      }
    },
    result: {
      data: {
        getConstructorByModel: [
          {
            __typename: 'Constructor',
            _id: '619ea7b95bbfb0002540bd6a',
            model: {
              _id: '6043c1223e06ad3edcdb7b31',
              translationsKey: '61851f740b77eeacb098c660',
              name: [
                {
                  lang: 'ua',
                  value: 'Гарбуз'
                },
                {
                  lang: 'en',
                  value: 'Pumpkin'
                }
              ],
              images: {
                small: 'small_id73cf0kly0wqne_гарбуз.png',
                thumbnail: 'thumbnail_id73cf0kly0wqne_гарбуз.png'
              },
              sizes: [
                {
                  _id: '604394a2a7532c33dcb326d5',
                  name: 'M',
                  additionalPrice: [
                    {
                      value: 136,
                      currency: 'UAH'
                    },
                    {
                      value: 5,
                      currency: 'USD'
                    }
                  ],
                  available: true
                },
                {
                  _id: '604394cba7532c33dcb326d6',
                  name: 'M',
                  additionalPrice: [
                    {
                      value: 109,
                      currency: 'UAH'
                    },
                    {
                      value: 4,
                      currency: 'USD'
                    }
                  ],
                  available: true
                },
                {
                  _id: '60439516a7532c33dcb326d7',
                  name: 'S',
                  additionalPrice: [
                    {
                      value: 82,
                      currency: 'UAH'
                    },
                    {
                      value: 3,
                      currency: 'USD'
                    }
                  ],
                  available: true
                }
              ]
            },
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
            basics: [
              {
                _id: '619eb96c5bbfb0002540bf84',
                translationsKey: '619eb96c5bbfb0002540bf83',
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
                images: {
                  large: 'large_eewk311kwe34min_основа-тканина-жовта.png',
                  medium: 'medium_eewk311kwe34min_основа-тканина-жовта.png',
                  small: 'small_eewk311kwe34min_основа-тканина-жовта.png',
                  thumbnail: 'thumbnail_eewk311kwe34min_основа-тканина-жовта.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 538,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '619eb9a45bbfb0002540bf96',
                translationsKey: '619eb9a45bbfb0002540bf95',
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
                images: {
                  large: 'large_eewk311kwe35v9c_основа-тканина-червона.png',
                  medium: 'medium_eewk311kwe35v9c_основа-тканина-червона.png',
                  small: 'small_eewk311kwe35v9c_основа-тканина-червона.png',
                  thumbnail: 'thumbnail_eewk311kwe35v9c_основа-тканина-червона.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 538,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '619eb9d55bbfb0002540bfad',
                translationsKey: '619eb9d55bbfb0002540bfac',
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
                images: {
                  large: 'large_eewk311kwe36xsl_основа-тканина-сіра.png',
                  medium: 'medium_eewk311kwe36xsl_основа-тканина-сіра.png',
                  small: 'small_eewk311kwe36xsl_основа-тканина-сіра.png',
                  thumbnail: 'thumbnail_eewk311kwe36xsl_основа-тканина-сіра.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 538,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '619eba0c5bbfb0002540bfbf',
                translationsKey: '619eba0c5bbfb0002540bfbe',
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
                images: {
                  large: 'large_eewk311kwe3847z_основа-тканина-синя.png',
                  medium: 'medium_eewk311kwe3847z_основа-тканина-синя.png',
                  small: 'small_eewk311kwe3847z_основа-тканина-синя.png',
                  thumbnail: 'thumbnail_eewk311kwe3847z_основа-тканина-синя.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 538,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              }
            ],
            pocketsWithRestrictions: [
              {
                currentPocketWithPosition: {
                  pocket: {
                    _id: '60e5aa91190df500240e1659',
                    images: {
                      large: 'large_eewk311kwdz20by_язичок-тканина-чорний.png',
                      medium: 'medium_eewk311kwdz20by_язичок-тканина-чорний.png',
                      small: 'small_eewk311kwdz20by_язичок-тканина-чорний.png',
                      thumbnail: 'thumbnail_eewk311kwdz20by_язичок-тканина-чорний.png'
                    }
                  }
                }
              }
            ],
            bottoms: [
              {
                _id: '619e937b5bbfb0002540b7b9',
                translationsKey: '619e937a5bbfb0002540b7b8',
                name: [
                  {
                    lang: 'ua',
                    value: 'Шкіра чорна '
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
                    value: 326,
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
                translationsKey: '619e947d5bbfb0002540b7c0',
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
                images: {
                  large: 'large_eewk311kwdxi1px_низ-шкіра-коричнева.png',
                  medium: 'medium_eewk311kwdxi1px_низ-шкіра-коричнева.png',
                  small: 'small_eewk311kwdxi1px_низ-шкіра-коричнева.png',
                  thumbnail: 'thumbnail_eewk311kwdxi1px_низ-шкіра-коричнева.png'
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
                translationsKey: '619e24c15bbfb00025409be2',
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
                images: {
                  large: 'large_eewk311kwdggeyx_158.jpg',
                  medium: 'medium_eewk311kwdggeyx_158.jpg',
                  small: 'small_eewk311kwdggeyx_158.jpg',
                  thumbnail: 'thumbnail_eewk311kwdggeyx_158.jpg'
                },
                constructorImg: 'small_eewk311kwdgh3ty_гобелен-5.png',
                additionalPrice: [
                  {
                    value: 55,
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
                translationsKey: '619e25db5bbfb00025409e4b',
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
                images: {
                  large: 'large_eewk311kwdgmaqv_155.jpg',
                  medium: 'medium_eewk311kwdgmaqv_155.jpg',
                  small: 'small_eewk311kwdgmaqv_155.jpg',
                  thumbnail: 'thumbnail_eewk311kwdgmaqv_155.jpg'
                },
                constructorImg: 'small_eewk311kwdgmzxf_гобелен-3.png',
                additionalPrice: [
                  {
                    value: 2,
                    currency: null
                  }
                ]
              },
              {
                _id: '619e26a95bbfb0002540a16d',
                translationsKey: '619e26a85bbfb0002540a169',
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
                images: {
                  large: 'large_eewk311kwdgr8a4_161.jpg',
                  medium: 'medium_eewk311kwdgr8a4_161.jpg',
                  small: 'small_eewk311kwdgr8a4_161.jpg',
                  thumbnail: 'thumbnail_eewk311kwdgr8a4_161.jpg'
                },
                constructorImg: 'small_eewk311kwdgrjem_гобелен-6.png',
                additionalPrice: [
                  {
                    value: 55,
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
                translationsKey: '619e27905bbfb0002540a2f3',
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
                images: {
                  large: 'large_eewk311kwdgw7kl_163.jpg',
                  medium: 'medium_eewk311kwdgw7kl_163.jpg',
                  small: 'small_eewk311kwdgw7kl_163.jpg',
                  thumbnail: 'thumbnail_eewk311kwdgw7kl_163.jpg'
                },
                constructorImg: 'small_eewk311kwdgwig5_гобелен-7.png',
                additionalPrice: [
                  {
                    value: 55,
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
                translationsKey: '619e28845bbfb0002540a36e',
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
                images: {
                  large: 'large_eewk311kwdh16q1_147.jpg',
                  medium: 'medium_eewk311kwdh16q1_147.jpg',
                  small: 'small_eewk311kwdh16q1_147.jpg',
                  thumbnail: 'thumbnail_eewk311kwdh16q1_147.jpg'
                },
                constructorImg: 'small_eewk311kwdh1qa3_гобелен-1.png',
                additionalPrice: [
                  {
                    value: 55,
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
        ]
      }
    }
  }
];
