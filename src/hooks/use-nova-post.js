import { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import { useQuery } from '@apollo/client';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouses
} from '../containers/checkout/checkout-form/delivery/nova-post/operations/nova-post.queries.js';

export default function useNovaPost(values, seletedCity) {
  const [cities, setCities] = useState([]);
  const [wareHouses, setHouse] = useState([]);

  const { refetch: refetchCities } = useQuery(getNovaPoshtaCities, {
    variables: {
      city: values.city
    },
    onCompleted: (data) => {
      setCities(data.getNovaPoshtaCities);
    }
  });

  const { refetch: refetchHouse, loading } = useQuery(getNovaPoshtaWarehouses, {
    variables: {
      city: values.city
    },
    onCompleted: (data) => {
      setHouse(data.getNovaPoshtaWarehouses);
    }
  });

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

  return [{ cities, wareHouses, loading }, refetchCitiesHandler];
}
