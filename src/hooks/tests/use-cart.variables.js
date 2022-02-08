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
    price: [
      {
        value: 1000,
        currency: 'UAH'
      },
      {
        value: 36,
        currency: 'USD'
      }
    ]
  },
  quantity: 1,
  constructor: false,
  category: 'Bags'
};

export const mockPromoCode = {
  getPromoCodeByCode: {
    code: 'test',
    discount: 10,
    categories: ['bags']
  }
};
