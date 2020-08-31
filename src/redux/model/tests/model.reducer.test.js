import { setModels } from '../model.actions';
import modelReducer, { initialState } from '../model.reducer';
import { testModel } from './models.mocks';

describe('Model reducer tests', () => {
  it('Should return default state', () => {
    expect(modelReducer(initialState, {})).toEqual(initialState);
  });

  it('Should return state with models', () => {
    const state = {
      ...initialState,
      models: testModel
    };
    expect(modelReducer(state, setModels(testModel))).toEqual(state);
  });
});
