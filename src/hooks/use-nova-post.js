import { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouses
} from '../containers/checkout/checkout-form/delivery/nova-post/operations/nova-post.queries.js';

export default function useNovaPost(values, seletedCity) {
  const {
    refetch: refetchCities,
    data,
    loading: citiesLoading
  } = useQuery(getNovaPoshtaCities, {
    variables: {
      city: values.city
    }
  });

  const cities = citiesLoading ? [] : data.getNovaPoshtaCities;

  const {
    refetch: refetchHouse,
    data: dataHouses,
    loading: housesLoading
  } = useQuery(getNovaPoshtaWarehouses, {
    variables: {
      city: values.city
    }
  });

  const wareHouses = housesLoading ? [] : dataHouses.getNovaPoshtaWarehouses;

  const refetchCitiesHandler = useRef(
    _.debounce(() => {
      refetchCities();
    }, 1000)
  );

  useEffect(() => {
    if (seletedCity) {
      refetchHouse();
    }
  }, [seletedCity]);

  return [{ cities, wareHouses, housesLoading }, refetchCitiesHandler];
}
