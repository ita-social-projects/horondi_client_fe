import React from 'react';
import { useTranslation } from 'react-i18next';
import { Table, TableCell, TableHead, TableRow, TableBody, Divider } from '@material-ui/core';
import { useStyles } from './order-history-table.style';

const OrderHistoryTable = ({ items }) => {
  const styles = useStyles();

  const { t } = useTranslation();

  return (
    <>
      <Divider variant='fullWidth' />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '22%' }} className={styles.tableCell}>
              {t('common.product')}
            </TableCell>
            <TableCell style={{ width: '25%' }} className={styles.tableCell} />
            <TableCell style={{ width: '15%' }} className={styles.tableCell}>
              {t('common.size')}
            </TableCell>
            <TableCell style={{ width: '15%' }} className={styles.tableCell}>
              {t('common.price')}
            </TableCell>
            <TableCell style={{ width: '15%' }} className={styles.tableCell}>
              {t('common.quantity')}
            </TableCell>
            <TableCell style={{ width: '15%' }} className={styles.tableCell}>
              {t('common.total')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </>
  );
};

export default OrderHistoryTable;
