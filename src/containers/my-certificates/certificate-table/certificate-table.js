import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TableCell } from '@material-ui/core';
import { useStyles } from './certificate-table.styles';
import { ROW_FIELDS } from '../../../configs/index';
import CertificateItem from '../cetrificate-item';
import TableComponent from '../../../components/table';

const CertificateTable = ({ items, openModal }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const certificateItems = useMemo(
    () =>
      [...items].map((item) => (
        <CertificateItem item={item} key={item._id} openModal={openModal} />
      )),
    [items]
  );

  const headerItems = useMemo(
    () =>
      ROW_FIELDS.CERTIFICATE.map((item) => (
        <TableCell key={item}>{t(`certificate.${item}`)}</TableCell>
      )),
    [ROW_FIELDS.CERTIFICATE, t]
  );

  return (
    <div className={styles.root}>
      <h2 className={styles.titleWrapper}>{t('certificate.title')}</h2>
      <div className={styles.table}>
        <TableComponent
          headerItems={headerItems}
          headerStyle={styles.tableHeader}
          bodyItems={certificateItems}
        />
      </div>
    </div>
  );
};

export default CertificateTable;
