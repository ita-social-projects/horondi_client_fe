import React from 'react';
import { useTranslation } from 'react-i18next';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import TableBodyRow from './TableBodyRow/TableBodyRow';
import { useStyles } from './table.styles';

const TableComponent = ({ items, headerColumns, bodyColumns, rowActions, styles }) => {
  const { t } = useTranslation();
  const tableStyles = useStyles();

  const headerCells = headerColumns.map((item) => <TableCell key={item}>{t(`${item}`)}</TableCell>);

  const bodyItems = items.map((item, index) => (
    <TableBodyRow
      key={index}
      item={item}
      bodyColumns={bodyColumns}
      rowActions={rowActions}
      styles={styles}
    />
  ));

  return (
    <Table>
      <TableHead>
        <TableRow className={tableStyles.tableHead}>{headerCells}</TableRow>
      </TableHead>

      <TableBody>{bodyItems}</TableBody>
    </Table>
  );
};

export default TableComponent;
