import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useStyles } from './number-input.styles';

const NumberInput = ({ onChangeQuantity, item }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <RemoveIcon
        className={styles.button}
        onClick={() => onChangeQuantity(item.id, 0)}
      />
      <span>{item.quantity}</span>
      <AddIcon
        className={styles.button}
        onClick={() => onChangeQuantity(item.id, 1)}
      />
    </div>
  );
};

export default NumberInput;
