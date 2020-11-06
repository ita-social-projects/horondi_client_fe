import {
  SET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_LOADING,
  GET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES,
  GET_NOVAPOSHTA_PRICES,
  GET_FONDY_URL,
  SET_FONDY_URL
} from './checkout.types';

const setNovaPoshtaPrices = (payload) => ({
  type: SET_NOVAPOSHTA_PRICES,
  payload
});

const setFondyUrl = (payload) => ({
  type: SET_FONDY_URL,
  payload
});

const getFondyUrl = (payload) => ({
  type: GET_FONDY_URL,
  payload
});

const getNovaPoshtaPrices = (payload) => ({
  type: GET_NOVAPOSHTA_PRICES,
  payload
});

const setNovaPoshtaStreets = (payload) => ({
  type: SET_NOVAPOSHTA_STREETS,
  payload
});

const getNovaPoshtaStreets = (payload) => ({
  type: GET_NOVAPOSHTA_STREETS,
  payload
});

const setNovaPoshtaCities = (cities) => ({
  type: SET_NOVAPOSHTA_CITIES,
  payload: cities
});

const getNovaPoshtaCities = (inputValue) => ({
  type: GET_NOVAPOSHTA_CITIES,
  payload: inputValue
});

const setNovaPoshtaWarehouse = (warehouses) => ({
  type: SET_NOVAPOSHTA_WAREHOUSES,
  payload: warehouses
});

const getNovaPoshtaWarehouse = (inputValue) => ({
  type: GET_NOVAPOSHTA_WAREHOUSES,
  payload: inputValue
});

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

export {
  getNovaPoshtaCities,
  setNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  setNovaPoshtaWarehouse,
  setLoading,
  setNovaPoshtaStreets,
  getNovaPoshtaStreets,
  setNovaPoshtaPrices,
  getNovaPoshtaPrices,
  setFondyUrl,
  getFondyUrl
};
