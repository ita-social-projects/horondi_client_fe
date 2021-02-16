import {
  GET_CONSTRUCTOR_MODEL_BY_ID,
  GET_MODEL_FOR_CONSTRUCTOR,
  SET_CONSTRUCTOR_MODEL_BY_ID,
  SET_MODEL_FOR_CONSTRUCTOR,
  SET_MODEL_LOADING
} from './constructor-model.types';

const getModelForConstructor = () => ({
  type: GET_MODEL_FOR_CONSTRUCTOR
});

const setModelForConstructor = (payload) => ({
  type: SET_MODEL_FOR_CONSTRUCTOR,
  payload
});

const getConstructorModelById = (payload) => ({
  type: GET_CONSTRUCTOR_MODEL_BY_ID,
  payload
});

const setConstructorModelById = (payload) => ({
  type: SET_CONSTRUCTOR_MODEL_BY_ID,
  payload
});

const setModelLoading = (payload) => ({
  type: SET_MODEL_LOADING,
  payload
});

export {
  getConstructorModelById,
  setConstructorModelById,
  setModelForConstructor,
  getModelForConstructor,
  setModelLoading
};
