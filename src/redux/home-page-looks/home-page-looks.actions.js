import {
  GET_ALL_HOME_IMAGE_LOOKS,
  SET_HOME_IMAGE_LOOKS
} from './home-page-looks.types';

const getAllHomeImageLooks = () => ({
  type: GET_ALL_HOME_IMAGE_LOOKS
});

const setHomeImageLooks = (links) => ({
  type: SET_HOME_IMAGE_LOOKS,
  payload: links
});

export { getAllHomeImageLooks, setHomeImageLooks };
