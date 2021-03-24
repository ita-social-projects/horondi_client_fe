import React from 'react';
import _ from 'lodash';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './number-input.styles';

const NumberInput = ({ onChangeQuantity, quantity }) => {
  const styles = useStyles();
  const setQuantityFromInput = (e) => {
    onChangeQuantity(Number(e.target.value));
  };

  return (
    <div className={styles.root} data-cy='cart-item-quantity'>
      <Button
        className={styles.button}
        onClick={() => onChangeQuantity(quantity - 1)}
        disabled={quantity <= 1}
      >
        <RemoveIcon />
      </Button>
      <TextField
        type='number'
        value={quantity}
        id='filled-basic'
        variant='outlined'
        onChange={setQuantityFromInput}
        inputProps={{ min: 0, style: { textAlign: 'center', width: '25px', height: '15px' } }}
      />
      <Button className={styles.button} onClick={() => onChangeQuantity(quantity + 1)}>
        <AddIcon />
      </Button>
    </div>
  );
};

export default NumberInput;
