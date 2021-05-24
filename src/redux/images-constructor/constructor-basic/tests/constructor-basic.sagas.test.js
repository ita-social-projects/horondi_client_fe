import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setConstructorBasic } from '../constructor-basic.actions';
import {
  mockId,
  mockConstructorModel,
  mockError,
  methodCall,
  methodPut,
  mockState
} from '../../constructor.variables';
import { handleConstructorBasicLoad } from '../constructor-basic.sagas';
import { handleError } from '../../constructor.sagas';
import { getConstructorBasicById } from '../constructor-basic.operations';
import constructorBasic from '../constructor-basic.reducer';
import { setModelLoading } from '../../constructor-model/constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../configs/routes';
import { errorReducer } from '../../../error/error.reducer';
import constructorModel, { initialState } from '../../constructor-model/constructor-model.reducer';

describe('test for basic sagas', () => {
  it('should load constructor basic data', () =>
    expectSaga(handleConstructorBasicLoad, { payload: mockId })
      .provide([[call(getConstructorBasicById, mockId), mockConstructorModel]])
      .withReducer(constructorBasic, mockState)
      .put(setConstructorBasic(mockConstructorModel))
      .hasFinalState(mockConstructorModel)
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(1);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor basic', () =>
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
  it('should set error message if error in constructor basic', () =>
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
