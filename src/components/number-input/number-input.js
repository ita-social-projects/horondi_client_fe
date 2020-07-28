import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useStyles } from './number-input.styles';

const NumberInput = ({ onChangeQuantity, quantity }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <RemoveIcon
        className={styles.button}
        onClick={() => onChangeQuantity(0)}
      />
      <span>{quantity}</span>
      <AddIcon className={styles.button} onClick={() => onChangeQuantity(1)} />
    </div>
  );
};

export default NumberInput;
