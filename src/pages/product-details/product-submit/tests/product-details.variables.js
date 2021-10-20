export const Language = {
  language: 0
};

export const product = {
  _id: '60896f073cb33b2d5422a3cf',
  category: {
    _id: '6043bdeb3e06ad3edcdb7b2d',
    name: [
      {
        lang: 'ua',
        value: 'Рюкзаки '
      },
      {
        lang: 'en',
        value: 'Рюкзаки '
      }
    ]
  },
  name: [
    {
      lang: 'ua',
      value: 'test'
    },
    {
      lang: 'en',
      value: 'test'
    }
  ],
  sizes: [
    {
      _id: '12443',
      name: 'L',
      heightInCm: 2,
      widthInCm: 3,
      depthInCm: 4,
      weightInKg: 1,
      available: true,
      additionalPrice: [
        {
          currency: 'UAH',
          value: 1
        },
        {
          currency: 'EN',
          value: 1
        }
      ]
    }
  ],
  images: {
    primary: 'img'
  }
};

export const Products = {
  product: {
    ...product,
    _id: '123'
  },
  productToSend: {
    product,
    quatity: 1,
    options: {
      size: {
        _id: '12443'
      }
    }
  }
};

export const Cart = {
  list: []
};

export const Wishlist = {
  list: []
};

export const User = {
  userData: {
    _id: '1123'
  }
};
