import React from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';

import CertificateItem from '../cetrificate-item';

const CertificateTable = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  // useMemo 14 for const variable
  const rowItems = ['certificate', 'code', 'price', 'expiration', 'status'];
  // const headerItems = rowItems.map((item) => (
  //   <TableCell key={item._id}>{t(`certificate.${item}`)}</TableCell>
  // ));

  // const certificateItems = items.map((item) => <CertificateItem item={item} key={item._id} />);

  return (
    <div className={styles.root}>
      <h2 className={styles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={styles.table}>
        <Table>
          <TableHead>
            {/* <TableRow className={styles.tableHeader}>{headerItems}</TableRow> */}
            <TableRow className={styles.tableHeader}>
              {rowItems.map((item) => (
                <TableCell key={item._id}>{t(`certificate.${item}`)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* <TableBody>{certificateItems}</TableBody> */}
          <TableBody>
            {items.map((item) => (
              <CertificateItem item={item} key={item._id} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CertificateTable;
