import {
  SET_UKRPOST_REGIONS,
  GET_UKRPOST_REGIONS,
  SET_UKRPOST_DISTRICTS,
  GET_UKRPOST_DISTRICTS,
  SET_UKRPOST_CITIES,
  GET_UKRPOST_CITIES,
  SET_UKRPOST_POSTOFFICES,
  GET_UKRPOST_POSTOFFICES,
  SET_DELIVERY_LOADING
} from './checkout.types';

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
  setDeliveryLoading,
  getUkrPostCities,
  setUkrPostCities,
  getUkrPostDistricts,
  setUkrPostDistricts,
  getUkrPostPostOffices,
  setUkrPostPostOffices,
  getUkrPostRegions,
  setUkrPostRegions
};
