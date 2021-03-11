import {
  setConstructorModelById,
  setModelForConstructor,
  setModelLoading
} from '../constructor-model.actions';
import { mockConstructorModelData, mockConstructorModels } from '../../constructor.variables';
import constructorModel, { initialState } from '../constructor-model.reducer';

describe('reducer tests', () => {
  it('should return default store', () => {
    expect(constructorModel(initialState)).toEqual(initialState);
  });
  it('should set models for constructor to store', () => {
    expect(constructorModel(initialState, setModelForConstructor(mockConstructorModels))).toEqual({
      ...initialState,
      modelsForConstructor: mockConstructorModels
    });
  });
  it('should set model for constructor to store', () => {
    expect(
      constructorModel(initialState, setConstructorModelById(mockConstructorModelData))
    ).toEqual({
      ...initialState,
      currentModel: mockConstructorModelData
    });
  });
  it('should set loading to true', () => {
    expect(constructorModel(initialState, setModelLoading(true))).toEqual({
      ...initialState,
      modelLoading: true
    });
  });
});
