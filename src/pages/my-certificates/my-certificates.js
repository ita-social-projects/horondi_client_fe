import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useStyles } from './my-certificates.styles';
import { getAllCertificates } from './operations/my-certificates.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import EmptyCertificates from '../../containers/my-certificates/empty-certificates';
import FilledCertificates from '../../containers/my-certificates/filled-certificates/filled-certificates';

const CERTIFICATES_LIMIT = 5;

const MyCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const styles = useStyles();

  const { loading, error } = useQuery(getAllCertificates, {
    variables: {
      limit: CERTIFICATES_LIMIT,
      skip: (currentPage - 1) * CERTIFICATES_LIMIT
    },
    onCompleted: (data) => {
      setCertificates(data.getAllCertificates.items);
      setCount(data.getAllCertificates.count);
    }
  });

  const changePage = (value) => {
    setCurrentPage(value);
  };

  const quantityPages = Math.ceil(count / CERTIFICATES_LIMIT);

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.root}>
      {certificates.length ? (
        <FilledCertificates
          items={certificates}
          count={count}
          pagination={[currentPage, quantityPages, changePage]}
        />
      ) : (
        <EmptyCertificates />
      )}
    </div>
  );
};

export default MyCertificates;
