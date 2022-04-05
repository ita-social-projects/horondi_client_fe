export const Language = {
  language: 0
};

export const constructorValues = {
  __typename: 'C',
  _id: '619ea7245bbfb0002540bd29',
  name: [
    {
      lang: 'ua',
      value: 'Test Constructor UA'
    },
    {
      lang: 'en',
      value: 'Test Constructor EN'
    }
  ],
  bottoms: {
    translationsKey: '61938f3f47ff1a3ccc1ac522'
  },
  patterns: {
    _id: '61938f3f47ff1a3ccc1ac522'
  },
  size: {
    name: 'L',
    _id: '604394a2a7532c33dcb326d5',
    additionalPrice: [
      {
        value: 136,
        currency: 'UAH'
      },
      {
        value: 5,
        currency: 'USD'
      }
    ]
  }
};

export const mockCart = [
  {
    id: 1639871734119,
    productId: '619ea7245bbfb0002540bd29',
    sizeAndPrice: {
      size: {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L'
      },
      price: [
        {
          value: 1780,
          currency: 'UAH'
        },
        {
          value: 64,
          currency: 'USD'
        }
      ]
    },
    quantity: 4
  }
];

export const Products = {
  product: {
    ...constructorValues,
    _id: '123'
  },
  productToSend: {
    constructorValues,
    quatity: 1,
    options: {
      size: {
        _id: '604394cba7532c33dcb326d6'
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
