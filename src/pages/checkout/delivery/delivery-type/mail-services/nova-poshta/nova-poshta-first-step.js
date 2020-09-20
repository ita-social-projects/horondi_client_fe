import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaCities } from '../../../../../../redux/checkout/checkout.actions';

const NovaPoshtaFirstStep = () => {
  const style = useStyles();
  const cities = [];

  // let { cities } = useSelector(({ Checkout }) => ({
  //   cities: Checkout.cities
  // }));
  // cities = cities.map((citi) => citi.Description);
  // warehouses = warehouses.map((warehouse) => warehouse.Description);

  // const selectHandlerCity = (event) => {
  //   setCity(event.target.value);
  // };

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField
          {...params}
          // onChange={(event) => selectHandlerCity(event)}
          label='City'
          variant='outlined'
        />
      )}
    />
  );
};

export { NovaPoshtaFirstStep };
