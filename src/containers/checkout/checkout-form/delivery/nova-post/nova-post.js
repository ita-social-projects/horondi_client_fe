import React, { useCallback, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import FormControl from '@material-ui/core/FormControl';
import { useStyles } from './nova-post.styles';
import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_TEXT_FIELDS
} from '../../../../../translations/checkout.translations';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse
} from '../../../../../redux/checkout/checkout.actions';
import { TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';
import { POSTOMAT } from '../../../../../utils/checkout';

const NovaPost = ({ isLightTheme, language, setFieldValue, errors, touched }) => {
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
          <FormControl
            error={touched.city && !!errors.city}
            variant={TEXT_FIELD_VARIANT.OUTLINED}
            className={styles.formControl}
          >
            <Autocomplete
              onInputChange={(e, value) => {
                setInputValue(value);
                getPostCities(value);
              }}
              noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
              onChange={(event, value) => {
                if (value) {
                  setSelectedCity(value.description);
                  setFieldValue(CHECKOUT_INPUT_FIELD.city, value.description);
                } else {
                  setSelectedCity('');
                  setWarehouse('');
                }
              }}
              options={cities}
              inputValue={inputValue}
              getOptionLabel={(option) => option?.description || null}
              className={styles.dataInput}
              error={touched.city && !!errors.city}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={touched.city && !!errors.city}
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
          </FormControl>
          {touched.city && errors.city && (
            <div data-cy='code-error' className={styles.error}>
              {errors.city}
            </div>
          )}
        </div>
      </div>
      <div className={styles.novaPostData}>
        <h4 className={styles.novaPostDataTitle}>
          {CHECKOUT_TEXT_FIELDS[language].department}
        </h4>
        <div>
          <Autocomplete
            onInputChange={(event, value) => {
              setWarehouse(value);
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDepartment}
            onChange={(event, value) => {
              if (value) {
                setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, value.ref);
                setFieldValue(CHECKOUT_INPUT_FIELD.courierOfficeName, value.description);
              }
            }}
            disabled={!selectedCity}
            options={_.filter(
              warehouses,
              (warehouseItem) => !warehouseItem.description.includes(POSTOMAT)
            )}
            inputValue={wareHouse}
            getOptionLabel={(option) => option?.description}
            className={styles.dataInput}
            error={touched.courierOfficeName && !!errors.courierOfficeName}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.courierOfficeName && !!errors.courierOfficeName}
                label={CHECKOUT_TEXT_FIELDS[language].department}
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
          {touched.courierOfficeName && errors.courierOfficeName && (
            <div data-cy='code-error' className={styles.error}>
              {errors.courierOfficeName}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovaPost;
