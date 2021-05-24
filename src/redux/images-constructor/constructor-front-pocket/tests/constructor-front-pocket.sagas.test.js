import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setConstructorFrontPocket } from '../constructor-front-pocket.actions';
import {
  mockId,
  mockConstructorModel,
  mockError,
  methodCall,
  methodPut,
  mockState
} from '../../constructor.variables';
import { handleConstructorFrontPocketLoad } from '../constructor-front-pocket.sagas';
import { handleError } from '../../constructor.sagas';
import { getConstructorFrontPocketById } from '../constructor-front-pocket.operations';
import constructorBottom from '../constructor-front-pocket.reducer';
import { setModelLoading } from '../../constructor-model/constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../configs/routes';
import { errorReducer } from '../../../error/error.reducer';
import constructorModel, { initialState } from '../../constructor-model/constructor-model.reducer';

describe('test for front pocket sagas', () => {
  it('should load constructor front pocket data', () =>
    expectSaga(handleConstructorFrontPocketLoad, { payload: mockId })
      .provide([[call(getConstructorFrontPocketById, mockId), mockConstructorModel]])
      .withReducer(constructorBottom, mockState)
      .put(setConstructorFrontPocket(mockConstructorModel))
      .hasFinalState(mockConstructorModel)
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(1);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor front pocket', () =>
    expectSaga(handleError, mockError)
      .withReducer(constructorModel, initialState)
      .put(setModelLoading(true))
      .hasFinalState({
        ...initialState,
        modelLoading: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        expect(analysisPut).toHaveLength(3);
      }));
  it('should set error message if error in constructor front pocket', () =>
    expectSaga(handleError, mockError)
      .withReducer(errorReducer, { error: null })
      .put(setError(mockError.message))
      .hasFinalState({ error: mockError.message })
      .put(push(routes.pathToErrorPage))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        expect(analysisPut).toHaveLength(3);
      }));
});
