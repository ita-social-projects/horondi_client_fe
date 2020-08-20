import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { handleFilterLoad } from '../products.sagas';
import getItems from '../../../utils/client';
import { setProductsLoading, setAllProducts } from '../products.actions';

describe('get products by filter saga', () => {
  it('Filter products', () => {
    const productsExample = {
      data: {
        getProducts: {
          items: [
            {
              _id: '5878af9ff5ffeac87d1b6728',
              purchasedCount: 26,
              isHotItem: true,
              name: [
                {
                  lang: 'uk',
                  value: 'Ролтоп червоний 1'
                },
                {
                  lang: 'en',
                  value: 'Rolltop Red 1'
                }
              ],
              basePrice: 1450,
              rate: 4,
              images: [
                {
                  primary: {
                    medium: 'medium-primary_0.jpg'
                  }
                }
              ],
              colors: [
                {
                  name: [
                    {
                      lang: 'uk',
                      value: 'Темно-червоний'
                    },
                    {
                      lang: 'en',
                      value: 'Dark-red'
                    }
                  ],
                  simpleName: [
                    {
                      lang: 'uk',
                      value: 'червоний'
                    },
                    {
                      lang: 'en',
                      value: 'red'
                    }
                  ]
                }
              ],
              pattern: [
                {
                  lang: 'uk',
                  value: 'Чорний'
                },
                {
                  lang: 'en',
                  value: 'Black'
                }
              ],
              category: {
                _id: 'ddc81f5dbac48c38d0403dd3',
                name: [
                  {
                    value: 'Рюкзаки'
                  },
                  {
                    value: 'Backpacks'
                  }
                ],
                isMain: true
              }
            }
          ]
        },
        count: 1
      }
    };

    return expectSaga(handleFilterLoad, {})
      .provide([[matchers.call.fn(getItems), productsExample]])
      .put(setProductsLoading(true))
      .put(setAllProducts(productsExample.data.getProducts.items))
      .put(setProductsLoading(false))
      .run();
  });
});
