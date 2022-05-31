import React, { useState } from 'react';
import SearchBar from '../search-bar';
import { getFilteredProductsQuery } from '../../../pages/product-list-page/operations/product-list.queries';

export const mocks = [
  {
    request: {
      query: getFilteredProductsQuery,
      variables: { search: 'banana' },
      fetchPolicy: 'no-cache'
    },
    result: {
      data: {
        getProducts: {
          items: [
            {
              _id: '60565cc5158e2fdb53498457',
              category: {
                _id: '6043be253e06ad3edcdb7b2e',
                name: [
                  {
                    value: 'Сумки '
                  },
                  {
                    value: 'Bags'
                  }
                ]
              },
              model: {
                _id: '60467f00873045422c1dbf92',
                name: [
                  {
                    value: 'Бананки'
                  },
                  {
                    value: 'Banana Bags'
                  }
                ]
              },
              name: [
                {
                  lang: 'ua',
                  value: 'Червона бананка '
                },
                {
                  lang: 'en',
                  value: 'Banana red bag'
                }
              ],
              mainMaterial: {
                color: {
                  _id: '6043a1653e06ad3edcdb7b08',
                  name: [
                    {
                      lang: 'ua',
                      value: 'Червоний'
                    },
                    {
                      lang: 'en',
                      value: 'Red'
                    }
                  ],
                  simpleName: [
                    {
                      lang: 'ua',
                      value: 'Червоний'
                    },
                    {
                      lang: 'en',
                      value: 'Red'
                    }
                  ]
                }
              },
              images: {
                primary: {
                  large: 'large_1fw2211kz2nob54_236.jpg',
                  medium: 'medium_1fw2211kz2nob54_236.jpg',
                  small: 'small_1fw2211kz2nob54_236.jpg'
                }
              },
              pattern: {
                _id: '619e24c25bbfb00025409bf3',
                name: [
                  {
                    lang: 'ua',
                    value: 'Червоний'
                  },
                  {
                    lang: 'en',
                    value: 'Red'
                  }
                ]
              },
              basePrice: [
                {
                  value: 1485.62,
                  currency: 'UAH'
                },
                {
                  value: 50,
                  currency: 'USD'
                }
              ],
              availableCount: 0,
              available: true,
              rate: 5,
              translationsKey: '61af5bff97e964ccc50e2c29',
              sizes: [
                {
                  size: {
                    available: true
                  },
                  price: [
                    {
                      value: 2250,
                      currency: 'UAH'
                    },
                    {
                      value: 76,
                      currency: 'USD'
                    }
                  ]
                },
                {
                  size: {
                    available: true
                  },
                  price: [
                    {
                      value: 2300,
                      currency: 'UAH'
                    },
                    {
                      value: 76,
                      currency: 'USD'
                    }
                  ]
                }
              ]
            }
          ],
          count: 1
        }
      }
    }
  }
];

export const TestWrapper = () => {
  const initialSearchState = {
    searchFilter: '',
    products: [],
    searchBarVisibility: false,
    loading: false
  };

  const [searchParams, setSearchParams] = useState(initialSearchState);
  const { searchBarVisibility, searchFilter, products } = searchParams;

  return (
    <div>
      {searchBarVisibility && <span data-testid={searchFilter}>{products.length}</span>}

      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  );
};
