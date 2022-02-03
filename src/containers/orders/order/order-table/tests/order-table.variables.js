import { getProductById } from '../../../operations/order.queries';

export const mockGetProductById = {
  request: {
    query: getProductById
  },
  result: {
    data: {
      getProductById: {
        __typename: 'Product',
        _id: '60588c204b419a0ec128e4bc',
        bottomMaterial: {
          material: {
            translationsKey: '61840da5a40f604a050ce412'
          }
        },
        images: {
          primary: {
            thumbnail: 'thumbnail_4051sf11kxg1wx88_27.png'
          }
        },
        sizes: [
          {
            price: [
              { value: 2150, currency: 'UAH' },
              { value: 77, currency: 'USD' }
            ],
            size: { _id: '604394a2a7532c33dcb326d5', name: 'M', available: true }
          }
        ]
      },
      translationsKey: '61af5cbf97e964ccc50e2c31'
    }
  }
};

export const props = {
  cartLoading: true,
  cartQuantityLoading: false,
  items: [
    {
      sizeAndPrice: {
        size: {
          _id: 'test',
          name: 'S'
        },
        price: [
          {
            value: 1000,
            currency: 'UAH'
          }
        ]
      }
    }
  ],
  user: {}
};

export const modalProps = {
  language: 1,
  message: 'test',
  isOpen: true,
  onAction: jest.fn()
};

const mockGetCartItem = jest.fn().mockReturnValue({
  sizeAndPrice: {
    size: {
      _id: 'test',
      name: 'S'
    },
    price: [
      {
        value: 1000,
        currency: 'UAH'
      }
    ]
  }
});

const mockGetTotalPrice = jest.fn();
const mockChangeQuantity = jest.fn();
const mockChangeSize = jest.fn();

export const mockCartOperations = {
  getTotalPrice: mockGetTotalPrice,
  changeQuantity: mockChangeQuantity,
  getCartItem: mockGetCartItem,
  changeSize: mockChangeSize,
  removeFromCart: jest.fn()
};
