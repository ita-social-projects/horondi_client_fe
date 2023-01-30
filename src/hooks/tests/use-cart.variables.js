export const mockItem = {
  id: 1644343808287,
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
    price: 100
  },
  quantity: 1,
  constructor: false,
  category: { code: 'Bags' }
};

export const mockPromoCode = {
  getPromoCodeByCode: {
    code: 'test',
    discount: 10,
    categories: ['bags']
  }
};

export const mockCertificate = {
  getCertificateByParams: {
    name: 'HOR40315176',
    value: 17
  }
};

export const sizeAndPrice = {
  size: {
    available: true,
    _id: '60439516a7532c33dcb326d7',
    name: 'M',
    heightInCm: 35,
    widthInCm: 26,
    depthInCm: 14,
    volumeInLiters: 18,
    weightInKg: 0.8
  },
  price: 100
};

export const constructorData = {
  id: 1671183478828,
  sizeAndPrice: {
    size: {
      _id: '60439516a7532c33dcb326d7',
      name: 'S',
      available: true,
      absolutePrice: 20,
      relativePrice: null
    }
  },
  pattern: {
    _id: '619e24c25bbfb00025409bf3',
    absolutePrice: 50,
    relativePrice: null
  },
  bottom: {
    _id: '619e937b5bbfb0002540b7b9',
    absolutePrice: null,
    relativePrice: 100
  },
  basic: {
    _id: '619eb96c5bbfb0002540bf84',
    available: true,
    absolutePrice: 12,
    relativePrice: null
  },
  model: {
    _id: '6043bf9e3e06ad3edcdb7b30',
    sizes: [
      {
        _id: '604394cba7532c33dcb326d6',
        name: 'M',
        absolutePrice: 25,
        relativePrice: null,
        available: true
      },
      {
        _id: '60439516a7532c33dcb326d7',
        name: 'S',
        absolutePrice: 20,
        relativePrice: null,
        available: true
      },
      {
        _id: '636cbd8c15410800273f0e93',
        name: 'XXL',
        absolutePrice: 1,
        relativePrice: null,
        available: true
      },
      {
        _id: '636cbe4215410800273f0ebc',
        name: 'XXS',
        absolutePrice: 1,
        relativePrice: null,
        available: false
      }
    ]
  },
  basePrice: 9,
  quantity: 1,
  isFromConstructor: true,
  category: {
    code: 'constructor'
  }
};
