import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CHECKOUT_DROP_LIST } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaWarehouse } from '../../../../../../redux/checkout/checkout.actions';

const NovaPoshtaBottom = ({ city }) => {
  const { language } = useSelector(({ Language, Checkout }) => ({
    language: Language.language,
    warehouses: Checkout.warehouses
  }));

  const { warehouses } = useSelector(({ Checkout }) => ({
    warehouses: Checkout.warehouses
  }));

  const style = useStyles();

  const dispatch = useDispatch();
  const departments = warehouses.map((warehouse) => warehouse.description);

  useEffect(() => {
    dispatch(getNovaPoshtaWarehouse(city));
  }, [dispatch, city]);

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.contactField}>
      <Autocomplete
        disabled={!city}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={departments}
        className={style.dataInput}
        renderInput={(params) => (
          <TextField
            {...params}
            label={CHECKOUT_DROP_LIST[language].department}
            variant='outlined'
          />
        )}
      />
    </div>
  );
};

export { NovaPoshtaBottom };
