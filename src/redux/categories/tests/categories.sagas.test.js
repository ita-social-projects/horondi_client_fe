import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { handleCategoriesLoad } from '../categories.sagas';
import { setCategoriesLoading, setCategories } from '../categories.actions';
import { setError } from '../../error/error.actions';
import getItems from '../../../utils/client';

const categories = {
  data: {
    getAllCategories: {
      name: {
        value: 'bags',
        lang: 'en'
      }
    }
  }
};

describe('categories-saga testing', () => {
  it('should fails cause data is not defined ', async () => {
    // const getItems = jest.fn(query => categories);
    const query = `query {
                   getAllCategories {
                     categoryCode
                     _id
                     name {
                     value
                     lang
                     }
                     images {
                      large
                   }
                  }          
                 }`;

    const gen = handleCategoriesLoad();
    const e = new Error("Cannot read property 'data' of undefined");
    expect(gen.next().value).toEqual(put(setCategoriesLoading(true)));
    expect(gen.next().value).toEqual(call(getItems, query));
    expect(gen.next().value).toEqual(put(setCategoriesLoading(false)));
    expect(gen.next().value).toEqual(put(setError({ e })));
    expect(gen.next().value).toEqual(put(push('/error-page')));
  });
});
