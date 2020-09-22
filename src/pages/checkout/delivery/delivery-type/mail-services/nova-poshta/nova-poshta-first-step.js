import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from '../../../../checkout.styles';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';

const NovaPoshtaFirstStep = ({ cities, setCity }) => {
  const style = useStyles();
  const { language, loading } = useSelector(({ Checkout, Language }) => ({
    loading: Checkout.loading,
    cities: Checkout.cities,
    language: Language.language
  }));
  const [inputValue, setInputValue] = useState('');

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
      options={cities}
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

export { NovaPoshtaFirstStep };
