import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';

const TableBodyRow = ({ item, bodyColumns, rowActions, styles }) => {
  const bodyCells = bodyColumns.map(({ altText, style, calculatedCellValue }) => (
    <TableCell key={calculatedCellValue(item)} className={style}>
      {altText ? (
        <img src={calculatedCellValue(item)} className={style} alt={altText} />
      ) : (
        <div>{calculatedCellValue(item)}</div>
      )}
    </TableCell>
  ));

  const actionCell = (
    <TableCell className={rowActions.style}>
      {rowActions.actions.map(({ id, title, func, style, icon }) => (
        <Tooltip key={id} title={title(item)} placement='top'>
          <button className={style} onClick={() => func(item)}>
            {icon}
          </button>
        </Tooltip>
      ))}
    </TableCell>
  );

  return (
    <TableRow className={styles(item, 'tableRow')}>
      {bodyCells}
      {actionCell}
    </TableRow>
  );
};

export default TableBodyRow;
