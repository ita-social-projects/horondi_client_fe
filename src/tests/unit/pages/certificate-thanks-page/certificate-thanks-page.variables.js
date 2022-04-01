import { sendCertificatesCodesToEmail } from '../../../../pages/certificate-thanks-page/operations/certificate-thanks-page.queries';

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
