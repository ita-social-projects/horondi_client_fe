import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';
import { ROW_FIELDS } from '../../../configs/index';
import CertificateItem from '../cetrificate-item';

const CertificateTable = ({ items }) => {
  const [itemsList, setItemsList] = useState([]);
  const styles = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    if (items.length) setItemsList(items);
  }, [items]);

  const sortedCertificatesByDate = itemsList.sort(
    (a, b) => new Date(b.dateStart) - new Date(a.dateStart)
  );

  const certificateItems = sortedCertificatesByDate.map((item) => (
    <CertificateItem item={item} key={item._id} />
  ));

  const headerItems = ROW_FIELDS.map((item) => (
    <TableCell key={item._id}>{t(`certificate.${item}`)}</TableCell>
  ));

  return (
    <div className={styles.root}>
      <h2 className={styles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={styles.table}>
        <Table>
          <TableHead>
            <TableRow className={styles.tableHeader}>{headerItems}</TableRow>
          </TableHead>
          <TableBody>{certificateItems}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CertificateTable;
