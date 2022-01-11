export const mockedProps = {
  styles: {},
  t: jest.fn(),
  currency: 0,
  language: 0,
  checkoutFormBtnValue: jest.fn(),
  deliveryType: ''
};

export const ids = ['1637938395612', '1637938905565'];

export const mockedCartItemsData = [
  {
    id: ids[0],
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
  },
  {
    id: ids[1],
    productId: '6197b469b0263814e80359af',
    sizeAndPrice: {
      size: {
        _id: '604394a2a7532c33dcb326d5',
        name: 'L',
        heightInCm: 23,
        widthInCm: 28,
        depthInCm: 14,
        volumeInLiters: 24,
        weightInKg: 1.5,
        available: true
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
    quantity: 1
  }
];

export const mockTranslationsKey = '61840da5a40f604a050ce412';
export const mockNameUA = 'Test Product UA';
export const mockNameEN = 'Test Product EN';

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
