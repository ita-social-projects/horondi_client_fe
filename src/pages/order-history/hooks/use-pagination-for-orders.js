import { useState } from 'react';
import { useQuery } from '@apollo/client';

export default function usePaginationForOrders(limit, query) {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersCount, setOrdersCount] = useState(null);
  const [orders, setOrders] = useState([]);

  const { loading: loadingOrders, error: errorOrders } = useQuery(query, {
    variables: {
      pagination: {
        limit,
        skip: (currentPage - 1) * limit
      }
    },
    onCompleted: (data) => {
      setOrders(data.getUserOrders.userOrders);
      setOrdersCount(data.getUserOrders.ordersCount);
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first'
  });

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
