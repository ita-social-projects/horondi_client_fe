import React from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from '../product-info';

jest.mock('react-redux');

jest.mock('../product-info.styles', () => ({
  useStyles: () => ({})
}));

useSelector.mockImplementation(() => ({
  language: 0,
  currency: 0,
  name: [
    {
      lang: 'ua'
    }
  ],
  rate: 0,
  description: [
    {
      value: 'test'
    }
  ],
  mainMaterial: {
    color: {
      _id: '123'
    },
    material: {
      name: {
        0: {
          value: 'test'
        }
      }
    }
  },
  innerMaterial: {
    material: {
      name: [{ lang: 'ua' }]
    }
  },
  bottomMaterial: {
    material: {
      name: {
        0: {
          value: 'test'
        }
      }
    }
  },
  strapLengthInCm: '100',
  currentPrice: {
    price: [
      {
        value: 70
      }
    ]
  },
  currentWeight: {
    dimensions: {
      weightInKg: 1
    }
  },
  currentVolume: {
    dimensions: {
      volumeInLiters: 22
    }
  },
  sizes: [
    {
      size: {
        _id: '60439516a7532c33dcb326d7',
        name: 'S',
        heightInCm: 35,
        widthInCm: 26,
        depthInCm: 14,
        volumeInLiters: 18,
        weightInKg: 0.8,
        available: false
      },
      price: [
        {
          value: 2000,
          currency: 'UAH'
        },
        {
          value: 75,
          currency: 'USD'
        }
      ]
    }
  ]
}));

describe('Product info', () => {
  const props = {
    product: {
      rate: 5,
      name: [
        {
          lang: 'ua'
        }
      ],
      description: [
        {
          value: 'test'
        }
      ],
      mainMaterial: {
        color: {
          _id: '123',
          name: 'Blue'
        },
        material: {
          name: {
            0: {
              value: 'test'
            }
          }
        }
      },
      innerMaterial: {
        material: {
          name: [{ lang: 'ua' }]
        }
      },
      bottomMaterial: {
        material: {
          name: {
            0: {
              value: 'test'
            }
          }
        }
      },
      pattern: {
        _id: '123',
        images: {
          large: 'large_eewk311kwdgr8a4_161.jpg'
        }
      },
      strapLengthInCm: '100'
    },
    sizes: [
      {
        size: {
          _id: '60439516a7532c33dcb326d7',
          name: 'S',
          heightInCm: 35,
          widthInCm: 26,
          depthInCm: 14,
          volumeInLiters: 18,
          weightInKg: 0.8,
          available: false
        },
        price: [
          {
            value: 2000,
            currency: 'UAH'
          },
          {
            value: 75,
            currency: 'USD'
          }
        ]
      }
    ]
  };
  it('Should render <ProductInfo />', () => {
    const component = shallow(<ProductInfo {...props} />);
    expect(component).toBeDefined();
  });
});
