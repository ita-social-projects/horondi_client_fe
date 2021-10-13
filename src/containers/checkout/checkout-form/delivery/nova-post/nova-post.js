import React, { useCallback, useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { useStyles } from './nova-post.styles';
import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_TEXT_FIELDS,
  CHECKOUT_TITLES
} from '../../../../../translations/checkout.translations';
import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse
} from '../../../../../redux/checkout/checkout.actions';
import { MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';
import { POSTOMAT } from '../../../../../utils/checkout';
import { CY_CODE_ERR, CHECKOUT_INPUT_FIELD } from '../../../../../configs';
import { RESET } from '../../../../../const/checkout';

const NovaPost = ({ isLightTheme, language, setFieldValue, errors, touched, values }) => {
  const dispatch = useDispatch();
  const styles = useStyles({
    isLightTheme
  });

  const { deliveryLoading, cities, warehouses } = useSelector(({ Checkout }) => ({
    deliveryLoading: Checkout.deliveryLoading,
    cities: Checkout.cities,
    warehouses: Checkout.warehouses
  }));

  const [selectedCity, setSelectedCity] = useState(values.city);

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
      <h3 className={styles.novaPostTitle}>{CHECKOUT_TITLES[language].deliveryAddress}</h3>
      <div className={styles.novaPostData}>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(e, value, reason) => {
              if (reason !== RESET || (reason === RESET && value)) {
                setFieldValue(CHECKOUT_INPUT_FIELD.city, value);
              }
              getPostCities(values.city);
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
            onChange={(event, value) => {
              if (value) {
                setSelectedCity(value.description);
                setFieldValue(CHECKOUT_INPUT_FIELD.city, value.description);
              } else {
                setSelectedCity('');
                setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
              }
              setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
            }}
            options={cities}
            inputValue={values.city}
            getOptionLabel={(option) => option?.description || null}
            className={styles.dataInput}
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
                      {deliveryLoading && (
                        <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                      )}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
          {touched.city && errors.city && (
            <div data-cy={CY_CODE_ERR} className={styles.error}>
              {errors.city}
            </div>
          )}
        </div>
      </div>
      <div className={styles.novaPostData}>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(event, value, reason) => {
              if (reason !== RESET || (reason === RESET && value)) {
                setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, value);
              }
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDepartment}
            onChange={(event, value) => {
              if (value) {
                setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, value.description);
              } else {
                setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
              }
            }}
            disabled={!values.city}
            options={_.filter(
              warehouses,
              (warehouseItem) => !warehouseItem.description.includes(POSTOMAT)
            )}
            inputValue={values.courierOffice}
            getOptionLabel={(option) => option?.description}
            className={styles.dataInput}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.courierOffice && !!errors.courierOffice}
                label={CHECKOUT_TEXT_FIELDS[language].department}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {deliveryLoading && (
                        <CircularProgress color={MATERIAL_UI_COLOR.INHERIT} size={20} />
                      )}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
              />
            )}
          />
          {touched.courierOffice && errors.courierOffice && (
            <div data-cy={CY_CODE_ERR} className={styles.error}>
              {errors.courierOffice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovaPost;
