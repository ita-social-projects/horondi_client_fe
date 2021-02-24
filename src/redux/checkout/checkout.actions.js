import {
  SET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_DELIVERY_LOADING,
  SET_NOVAPOSHTA_PRICES,
  GET_NOVAPOSHTA_PRICES,
  GET_FONDY_DATA,
  SET_FONDY_DATA,
  SET_UKRPOST_REGIONS,
  GET_UKRPOST_REGIONS,
  SET_UKRPOST_DISTRICTS,
  GET_UKRPOST_DISTRICTS,
  SET_UKRPOST_CITIES,
  GET_UKRPOST_CITIES,
  SET_UKRPOST_POSTOFFICES,
  GET_UKRPOST_POSTOFFICES
} from './checkout.types';

const setNovaPoshtaPrices = (payload) => ({
  type: SET_NOVAPOSHTA_PRICES,
  payload
});

const setFondyData = (fondyData) => ({
  type: SET_FONDY_DATA,
  payload: fondyData
});

const getFondyData = (orderDesc) => ({
  type: GET_FONDY_DATA,
  payload: orderDesc
});

const getNovaPoshtaPrices = (payload) => ({
  type: GET_NOVAPOSHTA_PRICES,
  payload
});

const setNovaPoshtaCities = (cities) => ({
  type: SET_NOVAPOSHTA_CITIES,
  payload: cities
});

const getNovaPoshtaCities = (payload) => ({
  type: GET_NOVAPOSHTA_CITIES,
  payload
});

const setNovaPoshtaWarehouse = (payload) => ({
  type: SET_NOVAPOSHTA_WAREHOUSES,
  payload
});

const getNovaPoshtaWarehouse = (payload) => ({
  type: GET_NOVAPOSHTA_WAREHOUSES,
  payload
});

const setUkrPostRegions = (payload) => ({
  type: SET_UKRPOST_REGIONS,
  payload
});

const getUkrPostRegions = () => ({
  type: GET_UKRPOST_REGIONS
});
const setUkrPostDistricts = (payload) => ({
  type: SET_UKRPOST_DISTRICTS,
  payload
});

const getUkrPostDistricts = (payload) => ({
  type: GET_UKRPOST_DISTRICTS,
  payload
});
const setUkrPostCities = (payload) => ({
  type: SET_UKRPOST_CITIES,
  payload
});

const getUkrPostCities = (payload) => ({
  type: GET_UKRPOST_CITIES,
  payload
});
const setUkrPostPostOffices = (payload) => ({
  type: SET_UKRPOST_POSTOFFICES,
  payload
});

const getUkrPostPostOffices = (payload) => ({
  type: GET_UKRPOST_POSTOFFICES,
  payload
});

const setDeliveryLoading = (payload) => ({
  type: SET_DELIVERY_LOADING,
  payload
});

export {
  getNovaPoshtaCities,
  setNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  setNovaPoshtaWarehouse,
  setDeliveryLoading,
  setNovaPoshtaPrices,
  getNovaPoshtaPrices,
  setFondyData,
  getFondyData,
  getUkrPostCities,
  setUkrPostCities,
  getUkrPostDistricts,
  setUkrPostDistricts,
  getUkrPostPostOffices,
  setUkrPostPostOffices,
  getUkrPostRegions,
  setUkrPostRegions
};
