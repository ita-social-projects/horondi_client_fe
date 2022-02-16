import {
  checkCertificatesPaymentStatus,
  getCertificatesByPaymentToken,
  sendCertificatesCodesToEmail
} from '../../../../pages/certificate-thanks-page/operations/certificate-thanks-page.queries';

export const certificate = {
  _id: '619eb12f3c53565320f384c6',
  name: 'HOR12345678',
  value: 500,
  email: 'sashko@gmail.com',
  paymentStatus: 'PAID',
  dateStart: '2022-02-03T12:14:01.671Z',
  dateEnd: '2023-02-04T12:14:01.671Z'
};

export const count = 1;

export const mocks = [
  {
    request: {
      query: getCertificatesByPaymentToken,
      variables: {
        paymentToken: 'c8ac780d48a2c51a042f45888ec1202c33add460'
      }
    },
    result: jest.fn(() => ({
      data: {
        getCertificatesByPaymentToken: {
          paymentStatus: 'PROCESSING',
          certificates: [
            {
              name: 'HOR25622768',
              email: 'sashkohorondi@gmail.com',
              value: 1000,
              dateStart: '2022-02-08T22:23:22.246+00:00',
              dateEnd: '2023-02-09T22:23:22.246+00:00',
              paymentStatus: 'PROCESSING'
            }
          ]
        }
      }
    }))
  },
  {
    request: {
      query: checkCertificatesPaymentStatus,
      variables: {
        certificateName: 'HOR25622768',
        paymentToken: 'c8ac780d48a2c51a042f45888ec1202c33add460'
      }
    },
    result: {
      data: {
        checkCertificatesPaymentStatus: {
          certificates: [
            {
              name: 'HOR25622768',
              _id: '6202ee307a40504b6ceef095'
            }
          ],
          paymentStatus: 'PROCESSING'
        }
      }
    }
  },
  {
    request: {
      query: sendCertificatesCodesToEmail,
      variables: {
        data: {
          certificates: [
            {
              name: 'HOR25622768',
              email: 'sashkohorondi@gmail.com',
              value: 1000,
              dateStart: '2022-02-08T22:23:22.246+00:00',
              dateEnd: '2023-02-09T22:23:22.246+00:00'
            }
          ],
          language: 1
        }
      }
    },
    result: {
      data: {
        sendCertificatesCodesToEmail: {
          certificates: [
            {
              name: 'HOR25622768'
            }
          ]
        }
      }
    }
  }
];
