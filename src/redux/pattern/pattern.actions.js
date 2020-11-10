import { GET_PATTERNS, SET_PATTERNS } from './pattern.types';

export const setPatterns = (payload) => ({
  type: SET_PATTERNS,
  payload
});

export const getPatterns = (payload) => ({
  type: GET_PATTERNS,
  payload
});
