import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableHead, TableRow, TableBody } from '@material-ui/core';
import { useStyles } from './order-history-table.style';

const OrderHistoryTable = ({ items }) => {
  const styles = useStyles();

  const { t } = useTranslation();

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>{t('common.product')}</TableCell>
            <TableCell className={styles.tableCell} />
            <TableCell className={styles.tableCell}>{t('common.size')}</TableCell>
            <TableCell className={styles.tableCell}>{t('common.price')}</TableCell>
            <TableCell className={styles.tableCell}>{t('common.quantity')}</TableCell>
            <TableCell className={styles.tableCell}>{t('common.total')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </>
  );
};

export default OrderHistoryTable;
