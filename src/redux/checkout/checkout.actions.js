import { SET_NOVAPOSHTA_CITIES, GET_NOVAPOSHTA_CITIES } from './checkout.types';

const setNovaPoshtaCities = (cities) => ({
  type: SET_NOVAPOSHTA_CITIES,
  payload: cities
});

const getNovaPoshtaCities = (inputValue) => ({
  type: GET_NOVAPOSHTA_CITIES,
  payload: inputValue
});

export { getNovaPoshtaCities, setNovaPoshtaCities };
