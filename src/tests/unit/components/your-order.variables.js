export const mockedProps = {
  styles: {},
  t: jest.fn(),
  currency: 0,
  language: 0,
  checkoutFormBtnValue: jest.fn()
};

export const mockedCartItemsData = [
  {
    _id: '1',
    product: {
      _id: '1',
      name: [
        {
          lang: 'ua',
          value: 'Роллтоп жовтий'
        },
        {
          lang: 'en',
          value: 'Rolltop yellow'
        }
      ],
      category: {
        _id: '1'
      },
      bottomMaterial: {
        material: {
          name: [
            {
              lang: 'ua',
              value: 'Шкірзамінник'
            },
            {
              lang: 'en',
              value: 'Leatherette'
            }
          ]
        }
      },
      mainMaterial: {
        color: {
          _id: '1',
          name: [
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
      pattern: {
        _id: '1'
      },
      images: {
        primary: {
          small: 'small_4051pm10kty4jeer_19.png',
          thumbnail: 'thumbnail_4051pm10kty4jeer_19.png'
        }
      }
    },
    quantity: 1,
    options: {
      size: {
        _id: '1',
        name: 'S'
      }
    },
    allSizes: [
      {
        size: {
          _id: '1',
          name: 'S'
        },
        price: [
          {
            currency: 'UAH',
            value: 2050
          },
          {
            currency: 'USD',
            value: 78
          }
        ]
      }
    ],
    price: [
      {
        currency: 'UAH',
        value: 2050
      },
      {
        currency: 'USD',
        value: 78
      }
    ]
  },
  {
    _id: '2',
    product: {
      _id: '1',
      name: [
        {
          lang: 'ua',
          value: 'Сумка шопер'
        },
        {
          lang: 'en',
          value: 'Bag shopper'
        }
      ],
      category: {
        _id: '1'
      },
      bottomMaterial: {
        material: {
          name: [
            {
              lang: 'ua',
              value: 'Шкіра'
            },
            {
              lang: 'en',
              value: 'Leather'
            }
          ]
        }
      },
      mainMaterial: {
        color: {
          _id: '1',
          name: [
            {
              lang: 'ua',
              value: 'Жовтий'
            },
            {
              lang: 'en',
              value: 'Yellow'
            }
          ]
        }
      },
      pattern: {
        _id: '1'
      },
      images: {
        primary: {
          small: 'small_4051pn10ku36orx1_bag4.png',
          thumbnail: 'thumbnail_4051pn10ku36orx1_bag4.png'
        }
      }
    },
    quantity: 1,
    options: {
      size: {
        _id: '1',
        name: 'S'
      }
    },
    allSizes: [
      {
        size: {
          _id: '1',
          name: 'S'
        },
        price: [
          {
            currency: 'UAH',
            value: 900
          },
          {
            currency: 'USD',
            value: 35
          }
        ]
      },
      {
        size: {
          _id: '1',
          name: 'M'
        },
        price: [
          {
            currency: 'UAH',
            value: 1000
          },
          {
            currency: 'USD',
            value: 37
          }
        ]
      }
    ],
    price: [
      {
        currency: 'UAH',
        value: 900
      },
      {
        currency: 'USD',
        value: 35
      }
    ]
  }
];
