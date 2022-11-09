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
              _id: '6366445a0e8c5684b99d4c81',
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
                    name: 'M',
                    absolutePrice: 1,
                    relativePrice: null
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
                  features: {
                    material: {
                      _id: '6043a1f33e06ad3edcdb7b09'
                    },
                    color: {
                      _id: '6043a1653e06ad3edcdb7b08'
                    }
                  },
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
                  absolutePrice: 1
                }
              ],
              bottoms: [
                {
                  _id: '619e937b5bbfb0002540b7b9',
                  translationsKey: '619e937a5bbfb0002540b7b8',
                  features: {
                    material: {
                      _id: '6043ac5d3e06ad3edcdb7b13'
                    },
                    color: {
                      _id: '6043aa9c3e06ad3edcdb7b10'
                    }
                  },
                  name: [
                    {
                      lang: 'ua',
                      value: 'Шкіра чорна'
                    },
                    {
                      lang: 'en',
                      value: 'Black leather'
                    }
                  ],
                  images: {
                    large: 'large_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                    medium: 'medium_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                    small: 'small_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                    thumbnail: 'thumbnail_eewk311kwdxcgv1_низ-шкіра-чорна.png'
                  },
                  absolutePrice: null
                }
              ],
              pockets: [],
              patterns: [
                {
                  _id: '619e24c25bbfb00025409bf3',
                  translationsKey: '619e24c15bbfb00025409be2',
                  features: {
                    material: {
                      _id: '6043b2ec3e06ad3edcdb7b17',
                      name: [
                        {
                          lang: 'ua',
                          value: 'Нитки для шиття'
                        },
                        {
                          lang: 'en',
                          value: 'Threads for sewing'
                        }
                      ]
                    }
                  },
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
                  absolutePrice: 1,
                  relativePrice: null
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
        getConstructorByModel: {
          __typename: 'Constructor',
          _id: '6366445a0e8c5684b99d4c81',
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
                _id: '604394cba7532c33dcb326d6',
                name: 'M',
                absolutePrice: 1,
                relativePrice: null,
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
              features: {
                material: {
                  _id: '6043a1f33e06ad3edcdb7b09'
                },
                color: {
                  _id: '6043a1653e06ad3edcdb7b08'
                }
              },
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
              absolutePrice: 1,
              relativePrice: null
            }
          ],
          bottoms: [
            {
              _id: '619e937b5bbfb0002540b7b9',
              translationsKey: '619e937a5bbfb0002540b7b8',
              features: {
                material: {
                  _id: '6043ac5d3e06ad3edcdb7b13'
                },
                color: {
                  _id: '6043aa9c3e06ad3edcdb7b10'
                }
              },
              name: [
                {
                  lang: 'ua',
                  value: 'Шкіра чорна'
                },
                {
                  lang: 'en',
                  value: 'Black leather'
                }
              ],
              images: {
                large: 'large_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                medium: 'medium_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                small: 'small_eewk311kwdxcgv1_низ-шкіра-чорна.png',
                thumbnail: 'thumbnail_eewk311kwdxcgv1_низ-шкіра-чорна.png'
              },
              absolutePrice: null,
              relativePrice: 10
            }
          ],
          pockets: [],
          patterns: [
            {
              _id: '619e24c25bbfb00025409bf3',
              translationsKey: '619e24c15bbfb00025409be2',
              features: {
                material: {
                  _id: '6043b2ec3e06ad3edcdb7b17',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Нитки для шиття'
                    },
                    {
                      lang: 'en',
                      value: 'Threads for sewing'
                    }
                  ]
                }
              },
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
              absolutePrice: 1,
              relativePrice: null
            }
          ],
          basePrice: 10
        }
      }
    }
  }
];
