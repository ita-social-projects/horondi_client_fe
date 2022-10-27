import { getProductById } from '../../../../containers/orders/operations/order.queries';

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
            price: 77,
            size: { _id: '604394a2a7532c33dcb326d5', name: 'M', available: true }
          }
        ]
      },
      translationsKey: '61af5cbf97e964ccc50e2c31'
    }
  }
};
