import React from 'react';

import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';

import CertificateItem from '../cetrificate-item';

const CertificateTable = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const certificateItems = items.map((item) => <CertificateItem item={item} key={item.id} />);

  return (
    <div className={styles.root}>
      <h2 className={styles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={styles.table}>
        <Table>
          <TableHead>
            <TableRow
              classes={{
                root: styles.tableHeader
              }}
            >
              <TableCell>{t('certificate.certificate')}</TableCell>
              <TableCell>{t('certificate.code')}</TableCell>
              <TableCell>{t('certificate.price')}</TableCell>
              <TableCell>{t('certificate.expiration')}</TableCell>
              <TableCell>{t('certificate.status')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{certificateItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CertificateTable;
