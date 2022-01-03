export const fullMockedOrders = {
  loading: false,
  error: false,
  data: {
    getUserOrders: {
      userOrders: [
        {
          _id: '61cdce238e950b00256583a5',
          dateOfCreation: '1640877603606',
          status: 'CREATED',
          orderNumber: '1640877603566',
          items: [
            {
              quantity: 1,
              fixedPrice: [
                {
                  currency: 'UAH',
                  value: 2100
                },
                {
                  currency: 'USD',
                  value: 76
                }
              ],
              options: {
                size: {
                  name: 'S'
                }
              },
              product: {
                _id: '60588c204b419a0ec128e4bc',
                translationsKey: '61af5cbf97e964ccc50e2c31',
                model: {
                  sizes: [
                    {
                      name: 'L'
                    },
                    {
                      name: 'M'
                    },
                    {
                      name: 'S'
                    }
                  ]
                },
                images: {
                  primary: {
                    thumbnail: 'thumbnail_4051sf11kxg1wx88_27.png'
                  }
                },
                bottomMaterial: {
                  material: {
                    translationsKey: '61840da5a40f604a050ce412'
                  }
                }
              }
            }
          ],
          totalItemsPrice: [
            {
              value: 2100,
              currency: 'UAH'
            },
            {
              value: 76,
              currency: 'USD'
            }
          ]
        }
      ],
      ordersCount: 40
    }
  }
};

export const emptyMockedOrders = {
  loading: false,
  error: false,
  data: {
    getUserOrders: {
      userOrders: [],
      ordersCount: 40
    }
  }
};
