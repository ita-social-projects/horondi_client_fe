import {
  getBusinessPageByCode,
  setBusinessPage,
  setLoading
} from '../business-pages.actions';
import {
  SET_BUSINESS_PAGE_LOADING,
  SET_BUSINESS_PAGE,
  GET_BUSINESS_PAGE_BY_CODE
} from '../business-pages.types';

describe('Business pages actions test', () => {
  it('should set new business page to payload property', () => {
    const page = {
      code: 'new-page-code',
      title: [
        {
          lang: 'ua',
          value: 'Title_UA'
        },
        {
          lang: 'en',
          value: 'Title_EN'
        }
      ],
      text: [
        {
          lang: 'ua',
          value: 'Text_UA'
        },
        {
          lang: 'en',
          value: 'Text_EN'
        }
      ]
    };
    const result = {
      type: SET_BUSINESS_PAGE,
      payload: {
        businessPage: page,
        key: 'newPageCode'
      }
    };

    expect(setBusinessPage(page)).toEqual(result);
  });

  it('Should set business page loading to true', () => {
    expect(setLoading(true)).toEqual({
      type: SET_BUSINESS_PAGE_LOADING,
      payload: true
    });
  });

  it('should return object with type GET_BUSINESS_PAGE_BY_CODE', () => {
    const result = {
      type: GET_BUSINESS_PAGE_BY_CODE,
      payload: 'red'
    };

    expect(getBusinessPageByCode('red')).toEqual(result);
  });
});
