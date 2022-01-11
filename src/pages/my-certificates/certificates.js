import React from 'react';

import { useStyles } from './certificates.styles';
import FilledCertificates from '../../containers/my-certificates/filled-certificates/filled-certificates';

const Certificates = () => {
  const styles = useStyles();

  const items = [
    {
      code: 'HOR22075',
      price: '500',
      expirationDate: '15/11/2021 - 16/11/2022',
      status: 'active'
    },
    {
      code: 'WTJ77777',
      price: '1000',
      expirationDate: '12/10/2021 - 13/10/2022',
      status: 'active'
    }
  ];

  return (
    <div className={styles.root}>{items.length ? <FilledCertificates items={items} /> : null}</div>
  );
};

export default Certificates;
