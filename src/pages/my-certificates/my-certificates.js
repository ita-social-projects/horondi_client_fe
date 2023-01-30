import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { useAppStyles } from '../../components/app/app.styles';
import { getAllUserCertificates } from './operations/my-certificates.queries';
import errorOrLoadingHandler from '../../utils/errorOrLoadingHandler';
import EmptyCertificates from '../../containers/my-certificates/empty-certificates';
import FilledCertificates from '../../containers/my-certificates/filled-certificates/filled-certificates';

const CERTIFICATES_LIMIT = 5;

const MyCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const appStyles = useAppStyles();

  const [getAllCertificates, { loading, error }] = useLazyQuery(getAllUserCertificates, {
    fetchPolicy: 'network-only',
    variables: {
      limit: CERTIFICATES_LIMIT,
      skip: (currentPage - 1) * CERTIFICATES_LIMIT
    },
    onCompleted: (data) => {
      const { items, count } = data.getAllUserCertificates;
      setCertificates(items);
      setCount(count);
      if (!items.length && count) {
        setCurrentPage((prev) => prev - 1);
      }
    }
  });

  useEffect(() => getAllCertificates(), [getAllCertificates]);

  const changePage = (value) => {
    setCurrentPage(value);
  };

  const quantityPages = Math.ceil(count / CERTIFICATES_LIMIT);

  if (loading || error) return errorOrLoadingHandler(error, loading);

  return (
    <div className={appStyles.rootApp}>
      <div className={appStyles.containerApp}>
        {certificates?.length ? (
          <FilledCertificates
            items={certificates}
            count={count}
            onCertificateGift={getAllCertificates}
            pagination={[currentPage, quantityPages, changePage]}
          />
        ) : (
          <EmptyCertificates />
        )}
      </div>
    </div>
  );
};

export default MyCertificates;
