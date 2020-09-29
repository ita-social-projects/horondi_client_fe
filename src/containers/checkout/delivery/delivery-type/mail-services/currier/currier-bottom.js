import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaStreets } from '../../../../../../redux/checkout/checkout.actions';

const CurrierBottom = ({ cityForNovaPoshtaBottom }) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const { language, streets, loading } = useSelector(
    ({ Language, Checkout }) => ({
      language: Language.language,
      streets: Checkout.streets,
      loading: Checkout.loading
    })
  );

  const streetsArr = streets.map((warehouse) => warehouse.description);

  const [inputValue, setInputValue] = useState('');

  const payload = useMemo(
    () => ({
      ref: cityForNovaPoshtaBottom && cityForNovaPoshtaBottom.ref,
      street: inputValue
    }),
    [cityForNovaPoshtaBottom, inputValue]
  );

  useEffect(() => {
    dispatch(getNovaPoshtaStreets(payload));
  }, [dispatch, payload]);

  return (
    <div className={style.contactField}>
      <Autocomplete
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

export { CurrierBottom };
