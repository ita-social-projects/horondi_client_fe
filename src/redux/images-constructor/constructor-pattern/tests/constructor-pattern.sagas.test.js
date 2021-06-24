import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setConstructorPattern } from '../constructor-pattern.actions';
import {
  mockId,
  mockConstructorPattern,
  mockError,
  methodCall,
  methodPut,
  mockState
} from '../../constructor.variables';
import { handleConstructorPatternLoad } from '../constructor-pattern.sagas';
import { handleError } from '../../constructor.sagas';
import { getConstructorPatternById } from '../constructor-pattern.operations';
import constructorBottom from '../constructor-pattern.reducer';
import { setModelLoading } from '../../constructor-model/constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../const/routes';
import { errorReducer } from '../../../error/error.reducer';
import constructorModel, { initialState } from '../../constructor-model/constructor-model.reducer';

const { pathToErrorPage } = routes;

describe('test for front pocket sagas', () => {
  it('should load constructor front pocket data', () =>
    expectSaga(handleConstructorPatternLoad, { payload: mockId })
      .provide([[call(getConstructorPatternById, mockId), mockConstructorPattern]])
      .withReducer(constructorBottom, mockState)
      .put(setConstructorPattern(mockConstructorPattern))
      .hasFinalState(mockConstructorPattern)
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(1);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor pattern', () =>
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
  it('should set error message if error in constructor pattern', () =>
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
