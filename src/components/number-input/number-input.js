import React, { useEffect, useRef } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './number-input.styles';
import { TEXT_FIELD_VARIANT, TEXT_FIELDS } from '../../configs';

const NumberInput = ({ onChangeQuantity, quantity, setInputValue }) => {
  const styles = useStyles();
  const numInput = useRef();
  const setQuantityFromInput = (e) => {
    let num;
    if (e.target.value.match(/\D/g)) {
      num = 1;
    } else if (e.target.value < 1) {
      num = 1;
    } else if (e.target.value > 1000) {
      num = 1000;
    } else {
      num = e.target.value;
    }
    setInputValue(Number(num));
    onChangeQuantity(Number(num));
  };

  const handleInputFocus = () => {
    numInput.current.select();
  };

  useEffect(() => {
    numInput.current.focus();
  }, [quantity]);

  return (
    <div className={styles.root} data-cy='cart-item-quantity'>
      <Button
        className={styles.button}
        onClick={() => {
          onChangeQuantity(quantity - 1);
          setInputValue(quantity - 1);
        }}
        disabled={quantity <= 1}
        data-testid='decrement'
      >
        <RemoveIcon />
      </Button>
      <TextField
        type={TEXT_FIELDS.STRING}
        value={quantity}
        id='filled-basic'
        inputRef={numInput}
        variant={TEXT_FIELD_VARIANT.OUTLINED}
        onChange={setQuantityFromInput}
        onFocus={handleInputFocus}
        inputProps={{
          style: { textAlign: 'center', width: '20px', height: '3px' },
          'data-testid': 'text'
        }}
      />
      <Button
        className={styles.button}
        onClick={() => {
          onChangeQuantity(quantity + 1);
          setInputValue(quantity + 1);
        }}
        disabled={quantity >= 1000}
        data-testid='increment'
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default NumberInput;
