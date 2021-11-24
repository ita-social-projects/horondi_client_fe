import { getAllConstructors } from '../operations/getAllConstructors.queries';

import { getConstructorByModel } from '../operations/getConstructorByModel.queries';

export const mockAllConstructors = [
  {
    request: {
      query: getAllConstructors,
      variables: {
        limit: 0,
        skip: 0
      }
    },
    result: {
      data: {
        getAllConstructors: {
          items: [
            {
              _id: '6198d68c7eb53d080c7aa9a9',
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
                sizes: [
                  {
                    name: 'L',
                    additionalPrice: [
                      {
                        value: 133,
                        currency: 'UAH'
                      },
                      {
                        value: 5,
                        currency: 'USD'
                      }
                    ]
                  },
                  {
                    name: 'M',
                    additionalPrice: [
                      {
                        value: 107,
                        currency: 'UAH'
                      },
                      {
                        value: 4,
                        currency: 'USD'
                      }
                    ]
                  },
                  {
                    name: 'S',
                    additionalPrice: [
                      {
                        value: 80,
                        currency: 'UAH'
                      },
                      {
                        value: 3,
                        currency: 'USD'
                      }
                    ]
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
                  _id: '6198cee97eb53d080c7aa6dd',
                  translationsKey: '6198cee97eb53d080c7aa6dc',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Мальмо жовтий'
                    },
                    {
                      lang: 'en',
                      value: 'Malmo yellow'
                    }
                  ],
                  images: {
                    large: 'large_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                    medium: 'medium_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                    small: 'small_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                    thumbnail: 'thumbnail_3bob1l8kw7oaqyd_основа-тканина-жовта.png'
                  },
                  available: true,
                  additionalPrice: [
                    {
                      value: 532,
                      currency: 'UAH'
                    },
                    {
                      value: 20,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6198d3207eb53d080c7aa84f',
                  translationsKey: '6198d3207eb53d080c7aa84e',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Мальмо червоний'
                    },
                    {
                      lang: 'en',
                      value: 'Malmo red'
                    }
                  ],
                  images: {
                    large: 'large_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                    medium: 'medium_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                    small: 'small_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                    thumbnail: 'thumbnail_3bob1l8kw7oxvnz_основа-тканина-червона.png'
                  },
                  available: true,
                  additionalPrice: [
                    {
                      value: 532,
                      currency: 'UAH'
                    },
                    {
                      value: 20,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6198d8a17eb53d080c7aaa2c',
                  translationsKey: '6198d8a17eb53d080c7aaa2b',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Тканина сіра'
                    },
                    {
                      lang: 'en',
                      value: 'Gray cloth'
                    }
                  ],
                  images: {
                    large: 'large_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                    medium: 'medium_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                    small: 'small_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                    thumbnail: 'thumbnail_3bob1l8kw7ps2el_основа-тканина-сіра.png'
                  },
                  available: true,
                  additionalPrice: [
                    {
                      value: 532,
                      currency: 'UAH'
                    },
                    {
                      value: 20,
                      currency: 'USD'
                    }
                  ]
                }
              ],
              bottoms: [
                {
                  _id: '6198d54c7eb53d080c7aa91c',
                  translationsKey: '6198d54c7eb53d080c7aa91b',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Шкіра чорна роллтоп'
                    },
                    {
                      lang: 'en',
                      value: 'Black leather rolltop'
                    }
                  ],
                  images: {
                    large: 'large_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                    medium: 'medium_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                    small: 'small_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                    thumbnail: 'thumbnail_3bob1l8kw7p9s09_низ-шкіра-чорна.png'
                  },
                  additionalPrice: [
                    {
                      value: 319,
                      currency: 'UAH'
                    },
                    {
                      value: 12,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6198d90f7eb53d080c7aaa3e',
                  translationsKey: '6198d90f7eb53d080c7aaa3d',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Шкіра коричнева роллтоп'
                    },
                    {
                      lang: 'en',
                      value: 'Brown leather rolltop'
                    }
                  ],
                  images: {
                    large: 'large_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                    medium: 'medium_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                    small: 'small_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                    thumbnail: 'thumbnail_3bob1l8kw7pug1v_низ-шкіра-коричнева.png'
                  },
                  additionalPrice: [
                    {
                      value: 586,
                      currency: 'UAH'
                    },
                    {
                      value: 22,
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
                        large: 'large_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                        medium: 'medium_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                        small: 'small_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                        thumbnail: 'thumbnail_3bob1l8kw8e67ni_язичок-тканина-чорний.png'
                      }
                    }
                  }
                }
              ],
              patterns: [
                {
                  _id: '6043b87c3e06ad3edcdb7b19',
                  translationsKey: '617ad51beffdd85558444597',
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
                  constructorImg: 'small_euhv7i11kvgwped7_гобелен-5.png',
                  images: {
                    large: 'large_euhv7i11kvgwmf91_158.jpg',
                    medium: 'medium_euhv7i11kvgwmf91_158.jpg',
                    small: 'small_euhv7i11kvgwmf91_158.jpg',
                    thumbnail: 'thumbnail_euhv7i11kvgwmf91_158.jpg'
                  },
                  additionalPrice: [
                    {
                      value: 53,
                      currency: 'UAH'
                    },
                    {
                      value: 2,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6043b8c53e06ad3edcdb7b1a',
                  translationsKey: '617ad73f376335c9d73f9bd4',
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
                  constructorImg: 'small_id73cf0klxzmvrg_гобелен-3.png',
                  images: {
                    large: 'large_id73cf0klxzmqds_155-min.jpg',
                    medium: 'medium_id73cf0klxzmqds_155-min.jpg',
                    small: 'small_id73cf0klxzmqds_155-min.jpg',
                    thumbnail: 'thumbnail_id73cf0klxzmqds_155-min.jpg'
                  },
                  additionalPrice: [
                    {
                      value: 107,
                      currency: 'UAH'
                    },
                    {
                      value: 4,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6043b9f73e06ad3edcdb7b1d',
                  translationsKey: '617ad8c9376335c9d73f9bd6',
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
                  constructorImg: 'small_id73cf0klxztg9t_гобелен-6.png',
                  images: {
                    large: 'large_id73cf0klxztd3u_161-min.jpg',
                    medium: 'medium_id73cf0klxztd3u_161-min.jpg',
                    small: 'small_id73cf0klxztd3u_161-min.jpg',
                    thumbnail: 'thumbnail_id73cf0klxztd3u_161-min.jpg'
                  },
                  additionalPrice: [
                    {
                      value: 1065,
                      currency: 'UAH'
                    },
                    {
                      value: 40,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6043ba373e06ad3edcdb7b1e',
                  translationsKey: '617ad936376335c9d73f9bd7',
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
                  constructorImg: 'small_id73cf0klxzut8v_гобелен-7.png',
                  images: {
                    large: 'large_id73cf0klxzuq49_163-min.jpg',
                    medium: 'medium_id73cf0klxzuq49_163-min.jpg',
                    small: 'small_id73cf0klxzuq49_163-min.jpg',
                    thumbnail: 'thumbnail_id73cf0klxzuq49_163-min.jpg'
                  },
                  additionalPrice: [
                    {
                      value: 2050,
                      currency: 'UAH'
                    },
                    {
                      value: 77,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '6048f667fc3c0b3b34fd497f',
                  translationsKey: '617ad9a2376335c9d73f9bd8',
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
                  constructorImg: 'small_id73bp0km3pmaqo_гобелен-1.png',
                  images: {
                    large: 'large_id73bp0km3plxxt_147-min.jpg',
                    medium: 'medium_id73bp0km3plxxt_147-min.jpg',
                    small: 'small_id73bp0km3plxxt_147-min.jpg',
                    thumbnail: 'thumbnail_id73bp0km3plxxt_147-min.jpg'
                  },
                  additionalPrice: [
                    {
                      value: 293,
                      currency: 'UAH'
                    },
                    {
                      value: 11,
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
  },
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
            _id: '6198d68c7eb53d080c7aa9a9',
            model: {
              _id: '6043bf9e3e06ad3edcdb7b30',
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
              sizes: [
                {
                  _id: '604394a2a7532c33dcb326d5',
                  name: 'L',
                  additionalPrice: [
                    {
                      value: 133,
                      currency: 'UAH'
                    },
                    {
                      value: 5,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '604394cba7532c33dcb326d6',
                  name: 'M',
                  additionalPrice: [
                    {
                      value: 107,
                      currency: 'UAH'
                    },
                    {
                      value: 4,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  _id: '60439516a7532c33dcb326d7',
                  name: 'S',
                  additionalPrice: [
                    {
                      value: 80,
                      currency: 'UAH'
                    },
                    {
                      value: 3,
                      currency: 'USD'
                    }
                  ]
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
                _id: '6198cee97eb53d080c7aa6dd',
                translationsKey: '6198cee97eb53d080c7aa6dc',
                name: [
                  {
                    lang: 'ua',
                    value: 'Мальмо жовтий'
                  },
                  {
                    lang: 'en',
                    value: 'Malmo yellow'
                  }
                ],
                images: {
                  large: 'large_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                  medium: 'medium_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                  small: 'small_3bob1l8kw7oaqyd_основа-тканина-жовта.png',
                  thumbnail: 'thumbnail_3bob1l8kw7oaqyd_основа-тканина-жовта.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 532,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6198d3207eb53d080c7aa84f',
                translationsKey: '6198d3207eb53d080c7aa84e',
                name: [
                  {
                    lang: 'ua',
                    value: 'Мальмо червоний'
                  },
                  {
                    lang: 'en',
                    value: 'Malmo red'
                  }
                ],
                images: {
                  large: 'large_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                  medium: 'medium_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                  small: 'small_3bob1l8kw7oxvnz_основа-тканина-червона.png',
                  thumbnail: 'thumbnail_3bob1l8kw7oxvnz_основа-тканина-червона.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 532,
                    currency: 'UAH'
                  },
                  {
                    value: 20,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6198d8a17eb53d080c7aaa2c',
                translationsKey: '6198d8a17eb53d080c7aaa2b',
                name: [
                  {
                    lang: 'ua',
                    value: 'Тканина сіра'
                  },
                  {
                    lang: 'en',
                    value: 'Gray cloth'
                  }
                ],
                images: {
                  large: 'large_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                  medium: 'medium_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                  small: 'small_3bob1l8kw7ps2el_основа-тканина-сіра.png',
                  thumbnail: 'thumbnail_3bob1l8kw7ps2el_основа-тканина-сіра.png'
                },
                available: true,
                additionalPrice: [
                  {
                    value: 532,
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
                      large: 'large_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                      medium: 'medium_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                      small: 'small_3bob1l8kw8e67ni_язичок-тканина-чорний.png',
                      thumbnail: 'thumbnail_3bob1l8kw8e67ni_язичок-тканина-чорний.png'
                    }
                  }
                }
              }
            ],
            bottoms: [
              {
                _id: '6198d54c7eb53d080c7aa91c',
                translationsKey: '6198d54c7eb53d080c7aa91b',
                name: [
                  {
                    lang: 'ua',
                    value: 'Шкіра чорна роллтоп'
                  },
                  {
                    lang: 'en',
                    value: 'Black leather rolltop'
                  }
                ],
                images: {
                  large: 'large_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                  medium: 'medium_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                  small: 'small_3bob1l8kw7p9s09_низ-шкіра-чорна.png',
                  thumbnail: 'thumbnail_3bob1l8kw7p9s09_низ-шкіра-чорна.png'
                },
                additionalPrice: [
                  {
                    value: 319,
                    currency: 'UAH'
                  },
                  {
                    value: 12,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6198d90f7eb53d080c7aaa3e',
                translationsKey: '6198d90f7eb53d080c7aaa3d',
                name: [
                  {
                    lang: 'ua',
                    value: 'Шкіра коричнева роллтоп'
                  },
                  {
                    lang: 'en',
                    value: 'Brown leather rolltop'
                  }
                ],
                images: {
                  large: 'large_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                  medium: 'medium_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                  small: 'small_3bob1l8kw7pug1v_низ-шкіра-коричнева.png',
                  thumbnail: 'thumbnail_3bob1l8kw7pug1v_низ-шкіра-коричнева.png'
                },
                additionalPrice: [
                  {
                    value: 586,
                    currency: 'UAH'
                  },
                  {
                    value: 22,
                    currency: 'USD'
                  }
                ]
              }
            ],
            patterns: [
              {
                _id: '6043b87c3e06ad3edcdb7b19',
                translationsKey: '617ad51beffdd85558444597',
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
                  large: 'large_euhv7i11kvgwmf91_158.jpg',
                  medium: 'medium_euhv7i11kvgwmf91_158.jpg',
                  small: 'small_euhv7i11kvgwmf91_158.jpg',
                  thumbnail: 'thumbnail_euhv7i11kvgwmf91_158.jpg'
                },
                constructorImg: 'small_euhv7i11kvgwped7_гобелен-5.png',
                additionalPrice: [
                  {
                    value: 53,
                    currency: 'UAH'
                  },
                  {
                    value: 2,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6043b8c53e06ad3edcdb7b1a',
                translationsKey: '617ad73f376335c9d73f9bd4',
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
                  large: 'large_id73cf0klxzmqds_155-min.jpg',
                  medium: 'medium_id73cf0klxzmqds_155-min.jpg',
                  small: 'small_id73cf0klxzmqds_155-min.jpg',
                  thumbnail: 'thumbnail_id73cf0klxzmqds_155-min.jpg'
                },
                constructorImg: 'small_id73cf0klxzmvrg_гобелен-3.png',
                additionalPrice: [
                  {
                    value: 107,
                    currency: 'UAH'
                  },
                  {
                    value: 4,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6043b9f73e06ad3edcdb7b1d',
                translationsKey: '617ad8c9376335c9d73f9bd6',
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
                  large: 'large_id73cf0klxztd3u_161-min.jpg',
                  medium: 'medium_id73cf0klxztd3u_161-min.jpg',
                  small: 'small_id73cf0klxztd3u_161-min.jpg',
                  thumbnail: 'thumbnail_id73cf0klxztd3u_161-min.jpg'
                },
                constructorImg: 'small_id73cf0klxztg9t_гобелен-6.png',
                additionalPrice: [
                  {
                    value: 1065,
                    currency: 'UAH'
                  },
                  {
                    value: 40,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6043ba373e06ad3edcdb7b1e',
                translationsKey: '617ad936376335c9d73f9bd7',
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
                  large: 'large_id73cf0klxzuq49_163-min.jpg',
                  medium: 'medium_id73cf0klxzuq49_163-min.jpg',
                  small: 'small_id73cf0klxzuq49_163-min.jpg',
                  thumbnail: 'thumbnail_id73cf0klxzuq49_163-min.jpg'
                },
                constructorImg: 'small_id73cf0klxzut8v_гобелен-7.png',
                additionalPrice: [
                  {
                    value: 2050,
                    currency: 'UAH'
                  },
                  {
                    value: 77,
                    currency: 'USD'
                  }
                ]
              },
              {
                _id: '6048f667fc3c0b3b34fd497f',
                translationsKey: '617ad9a2376335c9d73f9bd8',
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
                  large: 'large_id73bp0km3plxxt_147-min.jpg',
                  medium: 'medium_id73bp0km3plxxt_147-min.jpg',
                  small: 'small_id73bp0km3plxxt_147-min.jpg',
                  thumbnail: 'thumbnail_id73bp0km3plxxt_147-min.jpg'
                },
                constructorImg: 'small_id73bp0km3pmaqo_гобелен-1.png',
                additionalPrice: [
                  {
                    value: 293,
                    currency: 'UAH'
                  },
                  {
                    value: 11,
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
