import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import {
  mockId,
  mockError,
  methodCall,
  methodPut,
  mockConstructorModelData,
  mockConstructorModels
} from '../../constructor.variables';
import {
  handleConstructorModelByIdLoad,
  handleConstructorModelsLoad
} from '../constructor-model.sagas';
import { handleError } from '../../constructor.sagas';
import { getModelForConstructor, getModelById } from '../constructor-model.operations';
import constructorModel, { initialState } from '../constructor-model.reducer';
import {
  setConstructorModelById,
  setModelForConstructor,
  setModelLoading
} from '../constructor-model.actions';
import { setError } from '../../../error/error.actions';
import routes from '../../../../const/routes';
import { errorReducer } from '../../../error/error.reducer';

const { pathToErrorPage } = routes;

describe('test for model sagas', () => {
  it('should load model by id', () =>
    expectSaga(handleConstructorModelByIdLoad, { payload: mockId })
      .put(setModelLoading(true))
      .provide([[call(getModelById, mockId), mockConstructorModelData]])
      .withReducer(constructorModel, initialState)
      .put(setConstructorModelById(mockConstructorModelData))
      .hasFinalState({
        ...initialState,
        currentModel: mockConstructorModelData,
        modelLoading: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(2);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should load models', () =>
    expectSaga(handleConstructorModelsLoad)
      .put(setModelLoading(true))
      .provide([[call(getModelForConstructor), mockConstructorModels]])
      .withReducer(constructorModel, initialState)
      .put(setModelForConstructor(mockConstructorModels))
      .hasFinalState({
        ...initialState,
        modelsForConstructor: mockConstructorModels,
        modelLoading: true
      })
      .run()
      .then((result) => {
        const { allEffects: analysis } = result;
        const analysisPut = analysis.filter((e) => e.type === methodPut);
        const analysisCall = analysis.filter((e) => e.type === methodCall);
        expect(analysisPut).toHaveLength(2);
        expect(analysisCall).toHaveLength(1);
      }));
  it('should set loading to true if error in constructor model', () =>
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
  it('should set error message if error in constructor model', () =>
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
