import {
  GET_ALL_HOME_IMAGE_LOOKS,
  SET_HOME_IMAGE_LOOKS,
  SET_HOME_IMAGE_LOOKS_LOADING
} from './home-page-looks.types';

const getAllHomeImageLooks = () => ({
  type: GET_ALL_HOME_IMAGE_LOOKS
});

const setHomeImageLooks = (payload) => ({
  type: SET_HOME_IMAGE_LOOKS,
  payload
});

const setHomeImageLooksLoading = (payload) => ({
  type: SET_HOME_IMAGE_LOOKS_LOADING,
  payload
});

export { getAllHomeImageLooks, setHomeImageLooks, setHomeImageLooksLoading };
