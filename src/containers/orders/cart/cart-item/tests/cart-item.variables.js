import {
  mockNameEN,
  mockNameUA,
  mockTranslationsKey
} from '../../../../../tests/unit/components/your-order.variables';

export const item = {
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
};

export const props = {
  item,
  language: 0,
  calcPrice: () => 10,
  currency: 0,
  user: {},
  cartQuantityLoading: false,
  setModalVisibility: () => null,
  setModalItem: () => null
};

export const mockQueryData = {
  __typename: 'Product',
  _id: '61938f3f47ff1a3ccc1ac5e7',
  name: [
    {
      lang: 'ua',
      value: mockNameUA
    },
    {
      lang: 'en',
      value: mockNameEN
    }
  ],
  bottomMaterial: {
    material: {
      translationsKey: mockTranslationsKey
    }
  },
  images: {
    primary: {
      thumbnail: 'thumbnail_hd0lc0ckw1zhymv_photo_2021-11-16_10-30-29.jpg'
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
          value: 1000,
          currency: 'UAH'
        },
        {
          value: 37,
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
          value: 950,
          currency: 'UAH'
        },
        {
          value: 36,
          currency: 'USD'
        }
      ]
    }
  ]
};
