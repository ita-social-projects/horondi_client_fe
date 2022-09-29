import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

const TableComponent = ({ headerItems, headerStyle, bodyItems }) => (
  <Table>
    <TableHead>
      <TableRow className={headerStyle}>{headerItems}</TableRow>
    </TableHead>

    <TableBody>{bodyItems}</TableBody>
  </Table>
);

export default TableComponent;
