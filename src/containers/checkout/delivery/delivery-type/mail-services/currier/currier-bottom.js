import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';

const CurrierSecondStep = ({ city }) => {
  const style = useStyles();
  const { language, streets, loading } = useSelector(
    ({ Language, Checkout }) => ({
      language: Language.language,
      streets: Checkout.streets,
      loading: Checkout.loading
    })
  );

  const streetsArr = streets.map((warehouse) => warehouse.description);

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.contactField}>
      <Autocomplete
        disabled={!city}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={streetsArr}
        className={style.dataInputCurrier}
        renderInput={(params) => (
          <TextField
            {...params}
            label={CHECKOUT_TEXT_FIELDS[language].street}
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
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].building}
        variant='outlined'
        className={style.dataInputCurrier}
      />
      <TextField
        required
        label={CHECKOUT_TEXT_FIELDS[language].apartment}
        variant='outlined'
        className={style.dataInputCurrier}
      />
    </div>
  );
};

export { CurrierSecondStep };
