import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setConstructorSize } from '../constructor-size.actions';
import {
  mockId,
  mockConstructorSize,
  mockError,
  methodCall,
  methodPut,
  mockState
} from '../../constructor.variables';
import { handleConstructorSizeLoad } from '../constructor-size.sagas';
import { handleError } from '../../constructor.sagas';
import { getConstructorSizeById } from '../constructor-size.operations';
import constructorSize from '../constructor-size.reducer';
import { setModelLoading } from '../../constructor-model/constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../configs/routes';
import { errorReducer } from '../../../error/error.reducer';
import constructorModel, { initialState } from '../../constructor-model/constructor-model.reducer';

const { pathToErrorPage } = routes;

describe('test for front pocket sagas', () => {
  it('should load constructor front pocket data', () =>
    expectSaga(handleConstructorSizeLoad, { payload: mockId })
      .provide([[call(getConstructorSizeById, mockId), mockConstructorSize]])
      .withReducer(constructorSize, mockState)
      .put(setConstructorSize(mockConstructorSize))
      .hasFinalState(mockConstructorSize)
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(1);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor size', () =>
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
  it('should set error message if error in constructor size', () =>
    expectSaga(handleError, mockError)
      .withReducer(errorReducer, { error: null })
      .put(setError(mockError.message))
      .hasFinalState({ error: mockError.message })
      .put(push(pathToErrorPage))
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        expect(analysisPut).toHaveLength(3);
      }));
});
