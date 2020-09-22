import {
  SET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_LOADING
} from './checkout.types';

const setNovaPoshtaCities = (cities) => ({
  type: SET_NOVAPOSHTA_CITIES,
  payload: cities
});

const getNovaPoshtaCities = (inputValue) => {
  console.log(inputValue);
  return {
    type: GET_NOVAPOSHTA_CITIES,
    payload: inputValue
  };
};

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
  setLoading
};
