export const props = (boolType, countComments = 1, disabled = true) => ({
  sizeIndex: 0,
  currentPrice: 1000,
  countComments: { count: countComments },
  checkDisabledProduct: disabled,
  product: {
    available: boolType,
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
        available: true,
        name: {
          0: {
            value: 'test'
          }
        }
      }
    },
    innerMaterial: {
      material: {
        available: true,
        name: [{ lang: 'ua' }]
      }
    },
    bottomMaterial: {
      material: {
        available: true,
        name: {
          0: {
            value: 'test'
          }
        }
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
          available: true
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
    ],
    pattern: {
      _id: '123',
      images: {
        large: 'large_eewk311kwdgr8a4_161.jpg'
      }
    },
    strapLengthInCm: '100'
  }
});
