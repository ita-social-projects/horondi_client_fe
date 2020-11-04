import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  CHECKOUT_DROP_LIST,
  CHECKOUT_TITLES
} from '../../../../../../translations/checkout.translations';
import { useStyles } from '../../../../checkout.styles';
import { getNovaPoshtaWarehouse } from '../../../../../../redux/checkout/checkout.actions';

const NovaPoshtaBottom = ({
  city,
  handleDeliveryTypeValidator,
  shouldValidate
}) => {
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

  useEffect(() => {
    inputValue
      ? handleDeliveryTypeValidator(true)
      : handleDeliveryTypeValidator(false);
  }, [inputValue, handleDeliveryTypeValidator]);

  const schedule = warehouses.find(
    (warehouse) => warehouse.description === inputValue
  );

  return (
    <div className={style.contactField}>
      <Autocomplete
        disabled={!city}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={warehouses.map((warehouse) => warehouse.description)}
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
      {inputValue && (
        <div className={style.deliverySchedule}>
          <span className={style.checkoutContactsName}>
            {CHECKOUT_TITLES[language].schedule}
          </span>
          <div className={style.checkoutContactsSchedule}>
            <div>
              <span>{CHECKOUT_TITLES[language].mondayToFriday}</span>
              <div className={style.day}>
                {schedule && schedule.schedule.monday}
              </div>
            </div>
            <div>
              <span>{CHECKOUT_TITLES[language].saturday}</span>
              <div className={style.day}>
                {schedule && schedule.schedule.saturday}
              </div>
            </div>
            <div>
              <span>{CHECKOUT_TITLES[language].sunday}</span>
              <div className={style.day}>
                {schedule &&
                  (schedule.schedule.sunday === '-'
                    ? 'Вихідний'
                    : schedule.schedule.sunday)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { NovaPoshtaBottom };
