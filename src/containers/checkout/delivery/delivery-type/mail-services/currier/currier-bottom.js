import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CHECKOUT_TEXT_FIELDS } from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaStreets } from '../../../../../../redux/checkout/checkout.actions';

const CurrierBottom = ({
  cityForNovaPoshtaBottom,
  handleDeliveryTypeValidator,
  setStreetValue,
  setBuildValue,
  setApartmentValue,
  streetValue,
  buildValue,
  apartmentValue
}) => {
  const style = useStyles();
  const dispatch = useDispatch();
  const { language, streets, loading } = useSelector(
    ({ Language, Checkout }) => ({
      language: Language.language,
      streets: Checkout.streets,
      loading: Checkout.loading
    })
  );

  useEffect(() => {
    streetValue && apartmentValue && buildValue
      ? handleDeliveryTypeValidator(true)
      : handleDeliveryTypeValidator(false);
  }, [streetValue, handleDeliveryTypeValidator, apartmentValue, buildValue]);

  const payload = useMemo(
    () => ({
      ref: cityForNovaPoshtaBottom && cityForNovaPoshtaBottom.ref,
      street: streetValue
    }),
    [cityForNovaPoshtaBottom, streetValue]
  );

  useEffect(() => {
    dispatch(getNovaPoshtaStreets(payload));
  }, [dispatch, payload]);

  return (
    <div className={style.contactField}>
      <Autocomplete
        disabled={!cityForNovaPoshtaBottom}
        value={streetValue}
        onInputChange={(event, newStreetValue) => {
          setStreetValue(newStreetValue);
        }}
        options={streets.map((warehouse) => warehouse.description)}
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
        disabled={!cityForNovaPoshtaBottom}
        required
        label={CHECKOUT_TEXT_FIELDS[language].building}
        variant='outlined'
        className={style.dataInputCurrier}
        value={buildValue}
        onChange={(e) => setBuildValue(e.target.value)}
      />
      <TextField
        disabled={!cityForNovaPoshtaBottom}
        required
        label={CHECKOUT_TEXT_FIELDS[language].apartment}
        variant='outlined'
        className={style.dataInputCurrier}
        value={apartmentValue}
        onChange={(e) => setApartmentValue(e.target.value)}
      />
    </div>
  );
};

export { CurrierBottom };
