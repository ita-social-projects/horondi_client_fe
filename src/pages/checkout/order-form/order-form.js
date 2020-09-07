import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from '../checkout.styles';

export const OrderForm = () => {
  const style = useStyles();
  return (
    <div className={style.orderFormWrapper}>
      <div>
        <span className={style.mainTitle}>Order form</span>
      </div>
      <div>
        <span>Contact information</span>
      </div>
      <TextField label='olol' variant='outlined' size='small' multiline />
      <TextField label='olol' variant='outlined' size='small' multiline />
      <TextField label='olol' variant='outlined' size='small' multiline />
      <TextField label='olol' variant='outlined' size='small' multiline />
      <div>
        <span>Delivery</span>
      </div>
      <TextField
        id='outlined-basic'
        label='olol'
        variant='outlined'
        size='small'
        multiline
      />
      <div>
        <span>Payment</span>
      </div>
      <TextField
        id='outlined-basic'
        label='olol'
        variant='outlined'
        size='small'
        multiline
      />
    </div>
  );
};
