import { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useQuery, useLazyQuery } from '@apollo/client';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouses
} from '../containers/checkout/checkout-form/delivery/nova-post/operations/nova-post.queries.js';

export default function useNovaPost(values, seletedCity) {
  const {
    refetch: getCities,
    data: dataCities,
    loading: citiesLoading
  } = useQuery(getNovaPoshtaCities, {
    variables: {
      city: values.city
    }
  });

  const cities = citiesLoading ? [] : dataCities.getNovaPoshtaCities;

  const [getHouse, { data: dataHouses, loading: housesLoading = true }] = useLazyQuery(
    getNovaPoshtaWarehouses,
    {
      variables: {
        city: values.city
      }
    }
  );

  const refetchCitiesHandler = useRef(
    _.debounce(() => {
      getCities();
    }, 1000)
  );

  useEffect(() => {
    if (seletedCity) {
      getHouse();
    }
  }, [seletedCity]);

  return [
    { cities, wareHouses: dataHouses?.getNovaPoshtaWarehouses, housesLoading },
    refetchCitiesHandler
  ];
}
