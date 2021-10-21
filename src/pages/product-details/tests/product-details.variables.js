const Language = {
  language: 0
};

const Products = {
  product: {
    rate: 2,
    name: [
      {
        lang: 'ua',
        value: 'test'
      }
    ],
    description: [
      {
        lang: 'ua',
        value: 'test'
      }
    ],
    mainMaterial: {
      material: {
        name: [
          {
            lang: 'ua',
            value: 'test'
          }
        ]
      }
    },
    innerMaterial: {
      material: {
        name: [
          {
            lang: 'ua',
            value: 'test'
          }
        ]
      }
    },
    bottomMaterial: {
      material: {
        name: [
          {
            lang: 'ua',
            value: 'test'
          }
        ]
      }
    },
    strapLengthInCm: 119
  },
  productToSend: {
    price: 12,
    dimensions: {
      weightInKg: 4,
      volumeInLiters: 3
    }
  }
};

const Currency = {
  currency: 0
};

module.exports = {
  Products,
  Language,
  Currency
};
