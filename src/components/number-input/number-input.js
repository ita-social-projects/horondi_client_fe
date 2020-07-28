import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useStyles } from './number-input.styles';

const NumberInput = ({
  onChangeQuantity,
  item: { _id, selectedSize, quantity }
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <RemoveIcon
        className={styles.button}
        onClick={() => onChangeQuantity(_id, selectedSize, 0)}
      />
      <span>{quantity}</span>
      <AddIcon
        className={styles.button}
        onClick={() => onChangeQuantity(_id, selectedSize, 1)}
      />
    </div>
  );
};

export default NumberInput;
