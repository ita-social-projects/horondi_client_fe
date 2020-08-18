import { SET_MODELS, GET_MODELS_BY_CATEGORY } from './model.types';

export const setModels = (models) => ({
  type: SET_MODELS,
  payload: models
});

export const getModelsByCategory = (category) => ({
  type: GET_MODELS_BY_CATEGORY,
  payload: category
});
