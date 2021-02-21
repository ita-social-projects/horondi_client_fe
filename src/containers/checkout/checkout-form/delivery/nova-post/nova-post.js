import React, { useCallback, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { useStyles } from './nova-post.styles';
import { CHECKOUT_ADDITIONAL_INFORMATION, CHECKOUT_DELIVERY_TYPES, CHECKOUT_TEXT_FIELDS } from '../../../../../translations/checkout.translations';
import { getNovaPoshtaCities, getNovaPoshtaWarehouse } from '../../../../../redux/checkout/checkout.actions';
import { TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';

const NovaPost = ({ isLightTheme, language, values, errors, touched, handleChange }) => {
  const dispatch = useDispatch();
  const styles = useStyles({
    isLightTheme
  });

  const { deliveryLoading, cities, warehouses } = useSelector(({ Checkout }) => ({
    deliveryLoading: Checkout.deliveryLoading,
    cities: Checkout.cities,
    warehouses: Checkout.warehouses
  }));

  const [inputValue, setInputValue] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [wareHouse, setWarehouse] = useState('');

  const getPostCities = useCallback(
    _.debounce((value) => {
      dispatch(getNovaPoshtaCities(value));
    }, 500),
    [dispatch, getNovaPoshtaCities]
  );
  useEffect(() => {
    if (selectedCity) {
      dispatch(getNovaPoshtaWarehouse(selectedCity));
    }
  }, [dispatch, selectedCity]);

  return (
    <div className={styles.novaPostContainer}>
      <h3 className={styles.novaPostTitle}>{CHECKOUT_DELIVERY_TYPES[language].novaPoshta}</h3>
      <div className={styles.novaPostData}>
        <h4 className={styles.novaPostDataTitle}>{CHECKOUT_TEXT_FIELDS[language].city}</h4>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(e, value) => {
              setInputValue(value);
              getPostCities(value);
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
            onChange={(event, value) => value ? setSelectedCity(value.description) : setSelectedCity('')}
            options={cities}
            inputValue={inputValue}
            getOptionLabel={(option) => option?.description || null}
            className={styles.dataInput}
            error={touched.city && !!errors.city}
            renderInput={(params) => (
              <TextField
                {...params}
                label={CHECKOUT_TEXT_FIELDS[language].city}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {deliveryLoading && <CircularProgress color='inherit' size={20} />}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
          {touched.city && errors.city && (
            <div data-cy='code-error' className={styles.error}>
              {errors.city}
            </div>
          )}
        </div>
      </div>
      <div className={styles.novaPostData}>
        <h4 className={styles.novaPostDataTitle}>{CHECKOUT_TEXT_FIELDS[language].department}</h4>
        <div>
          <Autocomplete
            onInputChange={(event, value) => {
              setWarehouse(value);
            }}
            value={values.courierOffice}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDepartment}
            onChange={handleChange}
            disabled={!selectedCity}
            options={_.filter(warehouses, (warehouseItem) => !warehouseItem.description.includes('Поштомат'))}
            inputValue={wareHouse}
            getOptionLabel={(option) => option?.description}
            className={styles.dataInput}
            error={touched.courierOffice && !!errors.courierOffice}
            renderInput={(params) => (
              <TextField
                {...params}
                label={CHECKOUT_TEXT_FIELDS[language].department}
                variant='outlined'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {deliveryLoading && <CircularProgress color='inherit' size={20} />}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
          {touched.courierOffice && errors.courierOffice && (
            <div data-cy='code-error' className={styles.error}>
              {errors.courierOffice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovaPost;
