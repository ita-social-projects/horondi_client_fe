import { takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { setModels, setModelsLoading } from './model.actions';
import getItems from '../../utils/client';
import { setError } from '../error/error.actions';
import { GET_MODELS_BY_CATEGORY } from './model.types';

export function* handleModelsLoad({ payload }) {
  try {
    yield put(setModelsLoading(true));
    const products = yield call(
      getItems,
      `query(
        $category: ID!
        ){
          getModelsByCategory(id: $category){
            category{
              name {
                value
              }
            }           
            name {
              value
            }
            images {
              large
            }
            description {
              value
            }
          }
        }`,
      {
        category: payload
      }
    );
    yield put(setModels(products.data.getModelsByCategory));

    yield put(setModelsLoading(false));
  } catch (e) {
    yield call(handleProductsErrors, e);
  }
}

export function* handleProductsErrors(e) {
  yield put(setError({ e }));
  yield put(push('/error-page'));
}

export default function* modelSaga() {
  yield takeEvery(GET_MODELS_BY_CATEGORY, handleModelsLoad);
}
