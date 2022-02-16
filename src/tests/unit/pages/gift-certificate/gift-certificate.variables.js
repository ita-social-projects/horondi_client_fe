import { generateCertificate } from '../../../../pages/gift-certificate/operations/gift-certificate.mutations';
import { getPaymentCheckoutForCertificates } from '../../../../pages/gift-certificate/operations/gift-certificate.queries';

export const mocks = [
  {
    request: {
      query: getPaymentCheckoutForCertificates,
      variables: {
        data: {
          certificates: [
            {
              name: 'HOR18154818',
              _id: '620bb2867bb0892880aac14c'
            }
          ],
          currency: 'UAH',
          amount: '100000'
        }
      }
    },
    result: {
      data: {
        getPaymentCheckoutForCertificates: {
          paymentToken: 'bbbf4dbc00198ae9e2d6be1257352c21cfd639c7',
          paymentUrl:
            'https://pay.fondy.eu/merchants/5ad6b888f4becb0c33d543d54e57d86c/default/index.html?token=bbbf4dbc00198ae9e2d6be1257352c21cfd639c7',
          certificatesOrderId: 'HOR39388860'
        }
      }
    }
  },
  {
    request: {
      query: generateCertificate,
      variables: {
        newCertificates: [
          {
            value: 1000,
            count: 1
          }
        ],
        email: 'sashkohorondi@gmail.com'
      }
    },
    result: jest.fn(() => ({
      data: {
        generateCertificate: {
          certificates: [
            {
              name: 'HOR18154818',
              _id: '620bb2867bb0892880aac14c'
            }
          ],
          certificatesPrice: 100000
        }
      }
    }))
  }
];

export const mockStore = {
  userData: {
    email: 'sashkohorondi@gmail.com'
  },
  currency: 0
};
