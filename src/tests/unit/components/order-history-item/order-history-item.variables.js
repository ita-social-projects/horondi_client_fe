import { getUserOrdersQuery } from '../../../../pages/order-history/operations/order-history.queries';

export const mock = [
  {
    request: {
      query: getUserOrdersQuery
    },
    result: {
      data: {
        getUserOrders: {
          _id: '61682716c834282f74bf505d',
          dateOfCreation: '1634215702441',
          status: 'CREATED',
          orderNumber: '1634215702438',
          items: [
            {
              quantity: 1,
              fixedPrice: [
                { currency: 'UAH', value: 1950 },
                { currency: 'USD', value: 74 }
              ],
              options: { size: { name: 'S' } },
              product: {
                bottomMaterial: {
                  material: {
                    name: [
                      {
                        lang: 'ua',
                        value: 'Шкірзамінник'
                      },
                      {
                        lang: 'en',
                        value: 'Leatherette'
                      }
                    ]
                  }
                },
                name: [
                  { lang: 'ua', value: 'Роллтоп синій' },
                  { lang: 'en', value: 'Rolltop blue' }
                ],
                model: { sizes: [{ name: 'L' }, { name: 'M' }, { name: 'S' }] },
                images: { primary: { thumbnail: 'thumbnail_4051pm10kty4dhv5_37.png' } }
              }
            }
          ],
          totalItemsPrice: [
            { value: 1950, currency: 'UAH' },
            { value: 74, currency: 'USD' }
          ]
        }
      }
    }
  }
];
export const order = {
  _id: '61682716c834282f74bf505d',
  dateOfCreation: '1634215702441',
  status: 'CREATED',
  orderNumber: '1634215702438',
  items: [
    {
      quantity: 1,
      fixedPrice: 74,
      options: { size: { name: 'S' } },
      product: {
        bottomMaterial: {
          material: {
            name: [
              {
                lang: 'ua',
                value: 'Шкірзамінник'
              },
              {
                lang: 'en',
                value: 'Leatherette'
              }
            ]
          }
        },
        name: [
          { lang: 'ua', value: 'Роллтоп синій' },
          { lang: 'en', value: 'Rolltop blue' }
        ],
        model: { sizes: [{ name: 'L' }, { name: 'M' }, { name: 'S' }] },
        images: { primary: { thumbnail: 'thumbnail_4051pm10kty4dhv5_37.png' } }
      }
    }
  ],
  totalItemsPrice: 74
};
