import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

import { useStyles } from './number-input.styles';

const NumberInput = ({ onChangeQuantity, quantity }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Button
        className={styles.button}
        onClick={() => onChangeQuantity(-1)}
        disabled={quantity <= 1}
      >
        <RemoveIcon />
      </Button>
      <input
        className={styles.input}
        type='number'
        value={quantity}
        onChange={(e) => onChangeQuantity(e.target.value, true)}
      />
      <Button className={styles.button} onClick={() => onChangeQuantity(1)}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default NumberInput;
