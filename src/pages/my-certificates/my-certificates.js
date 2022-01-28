import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { useStyles } from './my-certificates.styles';
import { getAllCertificates } from './operations/my-certificates.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import EmptyCertificates from '../../containers/my-certificates/empty-certificates';
import FilledCertificates from '../../containers/my-certificates/filled-certificates/filled-certificates';

const MyCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [count, setCount] = useState([]);
  const styles = useStyles();

  const { loading, error } = useQuery(getAllCertificates, {
    variables: {
      limit: 5,
      skip: 0
    },
    onCompleted: (data) => {
      setCertificates(data.getAllCertificates.items);
      setCount(data.getAllCertificates.count);
    }
  });

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={styles.root}>
      {certificates.length ? (
        <FilledCertificates items={certificates} count={count} />
      ) : (
        <EmptyCertificates />
      )}
    </div>
  );
};

export default MyCertificates;
