import { giftCertificateToEmail } from '../../../pages/gift-certificate/operations/gift-certificate.mutations';

export const mockSelector = {
  validUser: {
    orders: [],
    _id: '612e38135393e300240b4c6e',
    email: 'horondidev@gmail.com',
    firstName: 'Sashko',
    lastName: 'Horondi',
    phoneNumber: null,
    images: null,
    address: {},
    confirmed: true,
    cart: null,
    purchasedProducts: []
  }
};
export const certificateMock = {
  _id: '61e0447659cb701db416a3a4',
  name: 'XYQ332765',
  value: 1000,
  isUsed: false,
  isActivated: true,
  isExpired: false,
  dateStart: '2022-02-07T10:12:15.024Z',
  dateEnd: '2023-02-08T10:12:15.024Z'
};
export const requestMocks = [
  {
    request: {
      query: giftCertificateToEmail,
      variables: {
        id: '61e0447659cb701db416a3a4',
        email: 'test@test.com',
        oldEmail: 'horondidev@gmail.com',
        language: 1
      }
    },
    result: {
      data: {
        giftCertificateToEmail: {
          id: '61e0447659cb701db416a3a4',
          email: 'test@test.com',
          oldEmail: 'horondidev@gmail.com',
          language: 1
        }
      }
    }
  }
];
