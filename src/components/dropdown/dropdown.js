import React from 'react';
import propTypes from 'prop-types';
import { Select } from '@material-ui/core';
import { dropdownStyles } from './dropdown.styles';

const Dropdown = ({ mappedItems, handler, defaultValue, fromSideBar }) => {
  const styles = dropdownStyles({ fromSideBar });

  return (
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
};

Dropdown.propTypes = {
  mappedItems: propTypes.arrayOf(propTypes.shape({ value: propTypes.number })),
  handler: propTypes.func,
  defaultValue: propTypes.number,
  fromSideBar: propTypes.bool,
  styles: propTypes.shape({
    rootItem: propTypes.string,
    rootSelect: propTypes.string
  })
};

Dropdown.defaultProps = {
  mappedItems: [],
  handler: () => {},
  defaultValue: 0,
  fromSideBar: false,
  styles: {
    rootItem: '',
    rootSelect: ''
  }
};

export default Dropdown;
