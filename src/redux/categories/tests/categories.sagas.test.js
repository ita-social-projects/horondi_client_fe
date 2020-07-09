import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { handleCategoriesLoad } from '../categories.sagas';
import { setCategoriesLoading } from '../categories.actions';
import getItems from '../../../utils/client';
import { setError } from '../../error/error.actions';

describe('categories-saga testing', () => {
  it('should fails cause data is not defined ', async () => {
    const gen = handleCategoriesLoad();
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

    const e = new Error("Cannot read property 'data' of undefined");
    expect(gen.next().value).toEqual(put(setCategoriesLoading(true)));
    expect(gen.next().value).toEqual(call(getItems, query));
    expect(gen.next().value).toEqual(put(setCategoriesLoading(false)));
    expect(gen.next().value).toEqual(put(setError(e.message)));
    expect(gen.next().value).toEqual(put(push('/error-page')));
  });
});
