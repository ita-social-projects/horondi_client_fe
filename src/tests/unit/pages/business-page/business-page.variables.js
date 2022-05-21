import { getBusinessTextByCode } from '../../../../pages/business-page/operations/business-page.queries';

export const mockedEmail = 'email@gmail.com';
const mockCode = 'privacy-policy';
export const mockData = {
  params: {
    page: mockCode
  }
};
export const mockTranslationsKey = '61817b82c1b8cf2127edcb3a';

export const mockRequest = [
  {
    request: {
      query: getBusinessTextByCode,
      variables: {
        code: mockCode
      }
    },
    result: {
      data: {
        getBusinessTextByCode: {
          __typename: 'BusinessText',
          _id: '5fa034039a59a906f0610e38',
          code: mockCode,
          languages: ['ua', 'en'],
          translationsKey: mockTranslationsKey
        }
      }
    }
  }
];

export const mockTranslated = {
  title: 'Умови',
  text: '<p>Some text</p>'
};
