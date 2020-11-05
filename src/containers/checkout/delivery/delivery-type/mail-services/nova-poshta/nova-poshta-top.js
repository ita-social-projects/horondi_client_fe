import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from '../../../../checkout.styles';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';
import { setDeliveryType } from '../../../../../../redux/checkout/checkout.actions';

const NovaPoshtaTop = ({ setCity, citiesForNovaPoshta }) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const { language, loading } = useSelector(({ Checkout, Language }) => ({
    loading: Checkout.loading,
    cities: Checkout.cities,
    language: Language.language
  }));

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(setDeliveryType(inputValue));
  }, [dispatch, inputValue]);

  return (
    <Autocomplete
      onChange={(event, newValue) => {
        setCity(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        setCity(newInputValue);
      }}
      options={citiesForNovaPoshta}
      className={style.dataInput}
      renderInput={(params) => (
        <TextField
          {...params}
          label={CHECKOUT_TEXT_FIELDS[language].city}
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
  );
};

export { NovaPoshtaTop };
