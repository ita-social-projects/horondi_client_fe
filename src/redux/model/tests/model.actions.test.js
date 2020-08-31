import { setModels, getModelsByCategory } from '../model.actions';
import { SET_MODELS, GET_MODELS_BY_CATEGORY } from '../model.types';
import { testModel, testCategory } from './models.mocks';

describe('Model actions test', () => {
  it('Should set models data', () => {
    const res = {
      type: SET_MODELS,
      payload: testModel
    };
    expect(setModels(testModel)).toEqual(res);
  });

  it('Should set category data', () => {
    const res = {
      type: GET_MODELS_BY_CATEGORY,
      payload: testCategory
    };
    expect(getModelsByCategory(testCategory)).toEqual(res);
  });
});
