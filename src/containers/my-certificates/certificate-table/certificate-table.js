import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';
import { ROW_FIELDS } from '../../../configs/index';
import CertificateItem from '../cetrificate-item';

const CertificateTable = ({ items }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const certificateItems = useMemo(
    () => [...items].map((item) => <CertificateItem item={item} key={item._id} />),
    [items]
  );

  const headerItems = useMemo(
    () => ROW_FIELDS.map((item) => <TableCell key={item}>{t(`certificate.${item}`)}</TableCell>),
    [ROW_FIELDS, t]
  );

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
