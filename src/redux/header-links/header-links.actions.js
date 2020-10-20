import { GET_ALL_HEADER_LINKS, SET_HEADER_LINKS } from './header-links.types';

const getAllHeaderLinks = () => ({
  type: GET_ALL_HEADER_LINKS
});

const setHeaderLinks = (links) => ({
  type: SET_HEADER_LINKS,
  payload: links
});

export { getAllHeaderLinks, setHeaderLinks };
