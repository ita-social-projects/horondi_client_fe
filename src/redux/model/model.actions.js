import {
  SET_MODELS,
  GET_MODELS_BY_CATEGORY,
  SET_MODELS_LOADING
} from './model.types';

export const setModels = (models) => ({
  type: SET_MODELS,
  payload: models
});

export const setModelsLoading = (loading) => ({
  type: SET_MODELS_LOADING,
  payload: loading
});

export const getModelsByCategory = (category) => ({
  type: GET_MODELS_BY_CATEGORY,
  payload: category
});
