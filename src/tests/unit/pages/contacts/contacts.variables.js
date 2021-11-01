import { getContacts } from '../../../../pages/contacts/operations/contacts.queries';

export const mockedEmail = 'email@gmail.com';
export const mockRequest = [
  {
    request: {
      query: getContacts
    },
    result: {
      data: {
        getContacts: {
          items: [
            {
              _id: '5fa034039a59a906f0610e37',
              phoneNumber: '380942355682',
              openHours: [
                {
                  value: '10 p.m. | 2 a.m'
                },
                {
                  value: '10 p.m. | 2 a.m'
                }
              ],
              address: [
                {
                  value: 'Адреса'
                },
                {
                  value: 'Some address'
                }
              ],
              email: mockedEmail,
              link: { lat: '1', lon: '2' },
              translations_key: '5fa034039a59a906f0610e37'
            }
          ]
        }
      }
    }
  }
];
