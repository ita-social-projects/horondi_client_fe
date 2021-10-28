import { useState } from 'react';
import { useQuery } from '@apollo/client';

export default function usePaginationForOrders(limit, query) {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    loading: loadingOrders,
    error: errorOrders,
    data
  } = useQuery(query, {
    variables: {
      pagination: {
        limit,
        skip: (currentPage - 1) * limit
      }
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });

  const orders = data?.getUserOrders.userOrders;
  const ordersCount = data?.getUserOrders.ordersCount;

  const quantityPages = Math.ceil(ordersCount / limit);

  const changeHandler = (value) => {
    setCurrentPage(value);
  };

  return {
    loadingOrders,
    errorOrders,
    orders,
    ordersCount,
    currentPage,
    changeHandler,
    quantityPages
  };
}
