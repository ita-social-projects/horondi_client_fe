import React from 'react';
import { Select } from '@material-ui/core';

const Dropdown = ({ mappedItems, handler, defaultValue, styles }) => (
  <div className={styles.rootItem}>
    <Select
      className={styles.rootSelect}
      defaultValue={defaultValue}
      onChange={handler}
    >
      {mappedItems}
    </Select>
  </div>
);

export default Dropdown;
