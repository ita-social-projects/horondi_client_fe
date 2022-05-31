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
              _id: '619ea7245bbfb0002540bd29',
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
                    additionalPrice: 5
                  },
                  {
                    name: 'M',
                    additionalPrice: 4
                  },
                  {
                    name: 'S',
                    additionalPrice: 3
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
                  additionalPrice: 20
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
                  additionalPrice: 20
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
                  additionalPrice: 20
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
                  additionalPrice: 20
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
                  additionalPrice: 12
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
                  additionalPrice: 15
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
                  constructorImg: 'small_eewk311kwdgh3ty_гобелен-5.png',
                  images: {
                    large: 'large_eewk311kwdggeyx_158.jpg',
                    medium: 'medium_eewk311kwdggeyx_158.jpg',
                    small: 'small_eewk311kwdggeyx_158.jpg',
                    thumbnail: 'thumbnail_eewk311kwdggeyx_158.jpg'
                  },
                  additionalPrice: 2
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
                  constructorImg: 'small_eewk311kwdgmzxf_гобелен-3.png',
                  images: {
                    large: 'large_eewk311kwdgmaqv_155.jpg',
                    medium: 'medium_eewk311kwdgmaqv_155.jpg',
                    small: 'small_eewk311kwdgmaqv_155.jpg',
                    thumbnail: 'thumbnail_eewk311kwdgmaqv_155.jpg'
                  },
                  additionalPrice: 2
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
                  constructorImg: 'small_eewk311kwdgrjem_гобелен-6.png',
                  images: {
                    large: 'large_eewk311kwdgr8a4_161.jpg',
                    medium: 'medium_eewk311kwdgr8a4_161.jpg',
                    small: 'small_eewk311kwdgr8a4_161.jpg',
                    thumbnail: 'thumbnail_eewk311kwdgr8a4_161.jpg'
                  },
                  additionalPrice: 2
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
                  constructorImg: 'small_eewk311kwdgwig5_гобелен-7.png',
                  images: {
                    large: 'large_eewk311kwdgw7kl_163.jpg',
                    medium: 'medium_eewk311kwdgw7kl_163.jpg',
                    small: 'small_eewk311kwdgw7kl_163.jpg',
                    thumbnail: 'thumbnail_eewk311kwdgw7kl_163.jpg'
                  },
                  additionalPrice: 2
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
                  constructorImg: 'small_eewk311kwdh1qa3_гобелен-1.png',
                  images: {
                    large: 'large_eewk311kwdh16q1_147.jpg',
                    medium: 'medium_eewk311kwdh16q1_147.jpg',
                    small: 'small_eewk311kwdh16q1_147.jpg',
                    thumbnail: 'thumbnail_eewk311kwdh16q1_147.jpg'
                  },
                  additionalPrice: 2
                }
              ]
            },
            {
              _id: '619ea7a95bbfb0002540bd50',
              model: {
                _id: '6043c1983e06ad3edcdb7b32',
                translationsKey: '61851e150b77eeacb098c652',
                name: [
                  {
                    lang: 'ua',
                    value: 'Новий'
                  },
                  {
                    lang: 'en',
                    value: 'New'
                  }
                ],
                sizes: [
                  {
                    name: 'L',
                    additionalPrice: 5
                  }
                ]
              },
              name: [
                {
                  lang: 'ua',
                  value: 'Новий'
                },
                {
                  lang: 'en',
                  value: 'New'
                }
              ],
              basics: [
                {
                  _id: '619eba4a5bbfb0002540bfd1',
                  translationsKey: '619eba495bbfb0002540bfd0',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Мальмо червоний модель нова'
                    },
                    {
                      lang: 'en',
                      value: 'Malmo red model new'
                    }
                  ],
                  images: {
                    large: 'large_eewk311kwe39fw4_низ-2.png',
                    medium: 'medium_eewk311kwe39fw4_низ-2.png',
                    small: 'small_eewk311kwe39fw4_низ-2.png',
                    thumbnail: 'thumbnail_eewk311kwe39fw4_низ-2.png'
                  },
                  available: true,
                  additionalPrice: 12
                },
                {
                  _id: '619eba775bbfb0002540bfe4',
                  translationsKey: '619eba775bbfb0002540bfe2',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Мальмо жовтий модель нова'
                    },
                    {
                      lang: 'en',
                      value: 'Malmo yellow model new'
                    }
                  ],
                  images: {
                    large: 'large_eewk311kwe3afar_зображення_viber_2021-11-20_18-46-41-600.png',
                    medium: 'medium_eewk311kwe3afar_зображення_viber_2021-11-20_18-46-41-600.png',
                    small: 'small_eewk311kwe3afar_зображення_viber_2021-11-20_18-46-41-600.png',
                    thumbnail:
                      'thumbnail_eewk311kwe3afar_зображення_viber_2021-11-20_18-46-41-600.png'
                  },
                  available: true,
                  additionalPrice: 12
                }
              ],
              bottoms: [
                {
                  _id: '619e96615bbfb0002540b819',
                  translationsKey: '619e96615bbfb0002540b818',
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
                    large: 'large_eewk311kwdxsfjz_низ.png',
                    medium: 'medium_eewk311kwdxsfjz_низ.png',
                    small: 'small_eewk311kwdxsfjz_низ.png',
                    thumbnail: 'thumbnail_eewk311kwdxsfjz_низ.png'
                  },
                  additionalPrice: 15
                }
              ],
              pocketsWithRestrictions: [],
              patterns: [
                {
                  _id: '619e5e865bbfb0002540b0f4',
                  translationsKey: '619e5e865bbfb0002540b0f3',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Чорний'
                    },
                    {
                      lang: 'en',
                      value: 'Black'
                    }
                  ],
                  constructorImg: 'small_eewk311kwdpa20b_кишеня.png',
                  images: {
                    large: 'large_eewk311kwdp9l83_Чорний.jpg',
                    medium: 'medium_eewk311kwdp9l83_Чорний.jpg',
                    small: 'small_eewk311kwdp9l83_Чорний.jpg',
                    thumbnail: 'thumbnail_eewk311kwdp9l83_Чорний.jpg'
                  },
                  additionalPrice: 7
                },
                {
                  _id: '619e5fc05bbfb0002540b181',
                  translationsKey: '619e5fc05bbfb0002540b180',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Голубий'
                    },
                    {
                      lang: 'en',
                      value: 'Blue'
                    }
                  ],
                  constructorImg: 'small_eewk311kwdpgspo_новий-голуба-кишеня (1).png',
                  images: {
                    large: 'large_eewk311kwdpga47_Синій.jpg',
                    medium: 'medium_eewk311kwdpga47_Синій.jpg',
                    small: 'small_eewk311kwdpga47_Синій.jpg',
                    thumbnail: 'thumbnail_eewk311kwdpga47_Синій.jpg'
                  },
                  additionalPrice: 8
                }
              ]
            },
            {
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
                sizes: [
                  {
                    name: 'L',
                    additionalPrice: 5
                  },
                  {
                    name: 'M',
                    additionalPrice: 4
                  },
                  {
                    name: 'S',
                    additionalPrice: 3
                  }
                ]
              },
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
              basics: [
                {
                  _id: '619ebab15bbfb0002540bff5',
                  translationsKey: '619ebab15bbfb0002540bff4',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Мальмо сірий модель гарбуз'
                    },
                    {
                      lang: 'en',
                      value: 'Malmo grey model watermelon'
                    }
                  ],
                  images: {
                    large: 'large_eewk311kwe3bjq0_основа.png',
                    medium: 'medium_eewk311kwe3bjq0_основа.png',
                    small: 'small_eewk311kwe3bjq0_основа.png',
                    thumbnail: 'thumbnail_eewk311kwe3bjq0_основа.png'
                  },
                  available: true,
                  additionalPrice: 12
                }
              ],
              bottoms: [
                {
                  _id: '619e96df5bbfb0002540b871',
                  translationsKey: '619e96de5bbfb0002540b870',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Шкіра чорна '
                    },
                    {
                      lang: 'en',
                      value: 'Black  leather'
                    }
                  ],
                  images: {
                    large: 'large_eewk311kwdxv3ap_низ-чорна.png',
                    medium: 'medium_eewk311kwdxv3ap_низ-чорна.png',
                    small: 'small_eewk311kwdxv3ap_низ-чорна.png',
                    thumbnail: 'thumbnail_eewk311kwdxv3ap_низ-чорна.png'
                  },
                  additionalPrice: 15
                }
              ],
              pocketsWithRestrictions: [],
              patterns: []
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
            _id: '619ea7245bbfb0002540bd29',
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
                  additionalPrice: 5,
                  available: true
                },
                {
                  _id: '604394cba7532c33dcb326d6',
                  name: 'M',
                  additionalPrice: 4,
                  available: true
                },
                {
                  _id: '60439516a7532c33dcb326d7',
                  name: 'S',
                  additionalPrice: 3,
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
                additionalPrice: 20
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
                additionalPrice: 20
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
                additionalPrice: 20
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
                additionalPrice: 20
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
                additionalPrice: 4
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
                additionalPrice: 15
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
                additionalPrice: 2
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
                additionalPrice: 2
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
                additionalPrice: 2
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
                additionalPrice: 2
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
                additionalPrice: 2
              }
            ]
          }
        ]
      }
    }
  }
];
