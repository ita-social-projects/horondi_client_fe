import { getAllCurrencies } from '../../../../context/constants';

export const mockedCurrencies = [
  {
    request: {
      query: getAllCurrencies
    },
    result: {
      data: {
        getAllCurrencies: [
          {
            _id: '62864086798edd5b4415b9d1',
            convertOptions: {
              UAH: {
                name: 'UAH',
                exchangeRate: 30
              },
              USD: {
                name: 'USD',
                exchangeRate: 1
              }
            }
          }
        ]
      }
    }
  }
];
