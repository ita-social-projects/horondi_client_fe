import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';

const TableBodyRow = ({ item, bodyColumns, rowActions, styles }) => {
  const bodyCells = bodyColumns.map(({ altText, style, calculatedCellValue }) => (
    <TableCell key={calculatedCellValue(item)}>
      {altText ? (
        <img src={calculatedCellValue(item)} className={style(item)} alt={altText} />
      ) : (
        <div className={style(item)}>{calculatedCellValue(item)}</div>
      )}
    </TableCell>
  ));

  const actionCells = rowActions.map(({ id, title, func, style, icon }) => (
    <Tooltip key={id} title={title(item)} placement='top'>
      <button className={style(item)} onClick={() => func(item)}>
        {icon}
      </button>
    </Tooltip>
  ));

  return (
    <TableRow className={styles(item).tableRow}>
      {bodyCells}

      <TableCell>
        <div className={styles(item).actions}>{actionCells}</div>
      </TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
