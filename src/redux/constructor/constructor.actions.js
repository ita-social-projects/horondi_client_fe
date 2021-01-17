import {
  GET_CONSTRUCTOR_BASIC,
  GET_CONSTRUCTOR_MODEL,
  SET_CONSTRUCTOR_BASIC,
  SET_CONSTRUCTOR_MODEL,
  GET_CONSTRUCTOR_PATTERN,
  SET_CONSTRUCTOR_PATTERN,
  GET_CONSTRUCTOR_BOTTOM,
  SET_CONSTRUCTOR_BOTTOM
} from './constructor.types';

const getConstructorModel = (payload) => ({
  type: GET_CONSTRUCTOR_MODEL,
  payload
});

const setConstructorModel = (payload) => ({
  type: SET_CONSTRUCTOR_MODEL,
  payload
});

const getConstructorBasic = (payload) => ({
  type: GET_CONSTRUCTOR_BASIC,
  payload
});

const setConstructorBasic = (payload) => ({
  type: SET_CONSTRUCTOR_BASIC,
  payload
});

const getConstructorPattern = (payload) => ({
  type: GET_CONSTRUCTOR_PATTERN,
  payload
});

const setConstructorPattern = (payload) => ({
  type: SET_CONSTRUCTOR_PATTERN,
  payload
});

const getConstructorBottom = (payload) => ({
  type: GET_CONSTRUCTOR_BOTTOM,
  payload
});

const setConstructorBottom = (payload) => ({
  type: SET_CONSTRUCTOR_BOTTOM,
  payload
});

export {
  getConstructorBasic,
  setConstructorBasic,
  getConstructorModel,
  setConstructorModel,
  getConstructorPattern,
  setConstructorPattern,
  getConstructorBottom,
  setConstructorBottom
};
