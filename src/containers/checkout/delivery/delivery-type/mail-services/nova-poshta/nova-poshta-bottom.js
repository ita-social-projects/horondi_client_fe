import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CHECKOUT_DROP_LIST } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaWarehouse } from '../../../../../../redux/checkout/checkout.actions';

const NovaPoshtaBottom = ({ city }) => {
  const { language, warehouses, loading } = useSelector(
    ({ Language, Checkout }) => ({
      language: Language.language,
      warehouses: Checkout.warehouses,
      loading: Checkout.loading
    })
  );
  const style = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    city && dispatch(getNovaPoshtaWarehouse(city));
    setInputValue('');
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
        options={warehouses.map((warehouse) => warehouse.description)}
        // getOptionSelected = {(option)=>option}
        className={style.dataInput}
        renderInput={(params) => (
          <TextField
            {...params}
            label={CHECKOUT_DROP_LIST[language].department}
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
      />
    </div>
  );
};

export { NovaPoshtaBottom };
