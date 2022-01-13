import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { setConstructorBottom } from '../constructor-bottom.actions';
import {
  mockId,
  mockConstructorModel,
  mockError,
  methodCall,
  methodPut,
  mockState
} from '../../constructor.variables';
import { handleConstructorBottomLoad } from '../constructor-bottom.sagas';
import { handleError } from '../../constructor.sagas';
import { getConstructorBottomById } from '../constructor-bottom.operations';
import constructorBottom from '../constructor-bottom.reducer';
import { setModelLoading } from '../../constructor-model/constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../configs/routes';
import { errorReducer } from '../../../error/error.reducer';
import constructorModel, { initialState } from '../../constructor-model/constructor-model.reducer';

const { pathToErrorPage } = routes;

describe('test for bottom sagas', () => {
  it('should load constructor bottom data', () =>
    expectSaga(handleConstructorBottomLoad, { payload: mockId })
      .provide([[call(getConstructorBottomById, mockId), mockConstructorModel]])
      .withReducer(constructorBottom, mockState)
      .put(setConstructorBottom(mockConstructorModel))
      .hasFinalState(mockConstructorModel)
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(1);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor bottom', () =>
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
  it('should set error message if error in constructor bottom', () =>
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
