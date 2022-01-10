import React from 'react';
// import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';

// import {
//   cleanUserCart,
//   resetCart,
//   deleteProductFromUserCart,
//   removeItemFromCart
// } from '../../../redux/cart/cart.actions';

import CertificateItem from '../cetrificate-item';
// import Modal from '../../../components/modal';

const CertificateTable = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const certificateItems = items.map((item) => (
    <CertificateItem
      item={item}
      key={item.id}
      // price={item.price}
      // expirationDate={item.expirationDate}
      // status={item.status}
      // language={language}
      // user={user}
    />
  ));

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
