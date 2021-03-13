import {
  getConstructorModelById,
  setConstructorModelById,
  setModelForConstructor,
  getModelForConstructor,
  setModelLoading
} from '../constructor-model.actions';
import {
  GET_CONSTRUCTOR_MODEL_BY_ID,
  GET_MODEL_FOR_CONSTRUCTOR,
  SET_CONSTRUCTOR_MODEL_BY_ID,
  SET_MODEL_FOR_CONSTRUCTOR,
  SET_MODEL_LOADING
} from '../constructor-model.types';
import {
  mockId,
  mockConstructorModels,
  mockConstructorModelData
} from '../../constructor.variables';

describe('tests for model actions', () => {
  it('should get model for constructor', () => {
    expect(getModelForConstructor()).toEqual({
      type: GET_MODEL_FOR_CONSTRUCTOR
    });
  });
  it('should set model for constructor', () => {
    expect(setModelForConstructor(mockConstructorModels)).toEqual({
      type: SET_MODEL_FOR_CONSTRUCTOR,
      payload: mockConstructorModels
    });
  });
  it('should get constructor model id', () => {
    expect(getConstructorModelById(mockId)).toEqual({
      type: GET_CONSTRUCTOR_MODEL_BY_ID,
      payload: mockId
    });
  });
  it('should get constructor model id', () => {
    expect(setConstructorModelById(mockConstructorModelData)).toEqual({
      type: SET_CONSTRUCTOR_MODEL_BY_ID,
      payload: mockConstructorModelData
    });
  });
  it('should set model loading to true', () => {
    expect(setModelLoading(true)).toEqual({
      type: SET_MODEL_LOADING,
      payload: true
    });
  });
});
