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
  }
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
      strapLengthInCm: '100'
    }
  };
  it('Should render', () => {
    const component = mount(<ProductInfo {...props} />);
    expect(component).toBeDefined();
  });
});
