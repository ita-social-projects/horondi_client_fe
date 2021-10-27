import {
  SET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_DELIVERY_LOADING,
  SET_NOVAPOSHTA_PRICES,
  GET_NOVAPOSHTA_PRICES
} from './checkout.types';

const setNovaPoshtaPrices = (payload) => ({
  type: SET_NOVAPOSHTA_PRICES,
  payload
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
  getNovaPoshtaPrices
};
