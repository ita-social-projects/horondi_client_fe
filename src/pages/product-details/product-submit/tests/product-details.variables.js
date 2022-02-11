export const Language = {
  language: 0
};

export const product = {
  __typename: 'Product',
  _id: '61938f3f47ff1a3ccc1ac5e7',
  category: { name: ['', { value: 'bags' }] },
  name: [
    {
      lang: 'ua',
      value: 'Test Product UA'
    },
    {
      lang: 'en',
      value: 'Test Product En'
    }
  ],
  bottomMaterial: {
    material: {
      translationsKey: '61938f3f47ff1a3ccc1ac522'
    }
  },
  images: {
    primary: {
      thumbnail: 'thumbnail_hd0l44okw6h880p_giphy-downsized-large.gif'
    }
  },
  sizes: [
    {
      size: {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L'
      },
      price: [
        {
          value: 1050,
          currency: 'UAH'
        },
        {
          value: 39,
          currency: 'USD'
        }
      ]
    },
    {
      size: {
        _id: '604394cba7532c33dcb326d6',
        name: 'M'
      },
      price: [
        {
          value: 1000,
          currency: 'UAH'
        },
        {
          value: 38,
          currency: 'USD'
        }
      ]
    }
  ]
};

export const mockCart = [
  {
    id: 1637938395612,
    productId: '61938f3f47ff1a3ccc1ac5e7',
    sizeAndPrice: {
      size: {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L'
      },
      price: [
        {
          value: 1000,
          currency: 'UAH'
        },
        {
          value: 37,
          currency: 'USD'
        }
      ]
    },
    quantity: 4
  }
];

export const Products = {
  product: {
    ...product,
    _id: '123'
  }
};

export const productToSend = {
  product,
  quatity: 1,
  options: {
    size: {
      _id: '604394cba7532c33dcb326d6'
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
