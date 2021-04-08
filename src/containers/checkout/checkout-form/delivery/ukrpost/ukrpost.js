import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './ukrpost.styles';
import {
  getUkrPostCities,
  getUkrPostDistricts,
  getUkrPostPostOffices,
  getUkrPostRegions
} from '../../../../../redux/checkout/checkout.actions';
import { MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';
import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_DELIVERY_TYPES,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_TEXT_FIELDS
} from '../../../../../translations/checkout.translations';
import { POST_OFFICE_NUMBER, RESET } from '../../../../../utils/checkout';
import { CY_CODE_ERR } from '../../../../../configs';

const UkrPost = ({ isLightTheme, language, setFieldValue, errors, touched, values }) => {
  const dispatch = useDispatch();
  const styles = useStyles({
    isLightTheme
  });

  const {
    deliveryLoading,
    ukrPoshtaCities,
    ukrPoshtaRegions,
    ukrPoshtaDistricts,
    ukrPoshtaPostOffices
  } = useSelector(({ Checkout }) => ({
    deliveryLoading: Checkout.deliveryLoading,
    ukrPoshtaCities: Checkout.ukrPoshtaCities,
    ukrPoshtaRegions: Checkout.ukrPoshtaRegions,
    ukrPoshtaDistricts: Checkout.ukrPoshtaDistricts,
    ukrPoshtaPostOffices: Checkout.ukrPoshtaPostOffices
  }));

  useEffect(() => {
    dispatch(getUkrPostRegions());
  }, []);

  useEffect(() => {
    if (values.regionId) {
      dispatch(getUkrPostDistricts(values.regionId));
    }
  }, [dispatch, values.regionId]);

  useEffect(() => {
    if (values.districtId) {
      dispatch(getUkrPostCities(values.districtId));
    }
  }, [dispatch, values.districtId]);

  useEffect(() => {
    if (values.cityId) {
      dispatch(getUkrPostPostOffices(values.cityId));
    }
  }, [dispatch, values.cityId]);

  return (
    <div className={styles.ukrPostContainer}>
      <h3 className={styles.ukrPostTitle}>{CHECKOUT_DELIVERY_TYPES[language].ukrPoshta}</h3>
      <div className={styles.selectorInfo}>
        <Autocomplete
          onInputChange={(e, value, reason) => {
            if (reason !== RESET || (reason === RESET && value)) {
              setFieldValue(CHECKOUT_INPUT_FIELD.region, value);
            }
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneRegion}
          onChange={(event, value) => {
            if (value) {
              setFieldValue(CHECKOUT_INPUT_FIELD.region, value.REGION_UA);
              setFieldValue(CHECKOUT_INPUT_FIELD.regionId, value.REGION_ID);
              setFieldValue(CHECKOUT_INPUT_FIELD.district, '');
              setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
              setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
            } else {
              setFieldValue(CHECKOUT_INPUT_FIELD.region, '');
              setFieldValue(CHECKOUT_INPUT_FIELD.regionId, '');
            }
            setFieldValue(CHECKOUT_INPUT_FIELD.district, '');
            setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
            setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
          }}
          options={ukrPoshtaRegions}
          inputValue={values.region}
          getOptionLabel={(option) => option?.REGION_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.region && !!errors.region}
              label={CHECKOUT_TEXT_FIELDS[language].region}
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
        {touched.region && errors.region && (
          <div data-cy={CY_CODE_ERR} className={styles.error}>
            {errors.region}
          </div>
        )}
      </div>
      <div className={styles.selectorInfo}>
        <Autocomplete
          onInputChange={(e, value, reason) => {
            if (reason !== RESET || (reason === RESET && value)) {
              setFieldValue(CHECKOUT_INPUT_FIELD.district, value);
            }
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDistrict}
          onChange={(event, value) => {
            if (value) {
              setFieldValue(CHECKOUT_INPUT_FIELD.district, value.DISTRICT_UA);
              setFieldValue(CHECKOUT_INPUT_FIELD.districtId, value.DISTRICT_ID);
            } else {
              setFieldValue(CHECKOUT_INPUT_FIELD.districtId, '');
              setFieldValue(CHECKOUT_INPUT_FIELD.district, '');
            }
            setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
            setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
          }}
          disabled={!values.region}
          options={ukrPoshtaDistricts}
          inputValue={values.district}
          getOptionLabel={(option) => option?.DISTRICT_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.district && !!errors.district}
              label={CHECKOUT_TEXT_FIELDS[language].district}
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
        {touched.district && errors.district && (
          <div data-cy={CY_CODE_ERR} className={styles.error}>
            {errors.district}
          </div>
        )}
      </div>
      <div className={styles.selectorInfo}>
        <Autocomplete
          onInputChange={(e, value, reason) => {
            if (reason !== RESET || (reason === RESET && value)) {
              setFieldValue(CHECKOUT_INPUT_FIELD.city, value);
            }
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
          onChange={(event, value) => {
            if (value) {
              setFieldValue(CHECKOUT_INPUT_FIELD.city, value.CITY_UA);
              setFieldValue(CHECKOUT_INPUT_FIELD.cityId, value.CITY_ID);
            } else {
              setFieldValue(CHECKOUT_INPUT_FIELD.cityId, '');
              setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
            }
            setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
          }}
          disabled={!values.district}
          options={ukrPoshtaCities}
          inputValue={values.city}
          getOptionLabel={(option) => option?.CITY_UA || ''}
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
      <div className={styles.selectorInfo}>
        <Autocomplete
          onInputChange={(e, value, reason) => {
            if (reason !== RESET || (reason === RESET && value)) {
              setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, value);
            }
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDepartment}
          onChange={(event, value) => {
            if (value) {
              setFieldValue(
                CHECKOUT_INPUT_FIELD.courierOffice,
                `${POST_OFFICE_NUMBER} ${value.POSTCODE}, ${
                  value?.STREET_UA_VPZ ? value?.STREET_UA_VPZ : ''
                }`
              );
            } else {
              setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
            }
          }}
          disabled={!values.city}
          options={ukrPoshtaPostOffices}
          inputValue={values.courierOffice}
          getOptionLabel={(option) =>
            `${POST_OFFICE_NUMBER} ${option?.POSTCODE}, ${
              option?.STREET_UA_VPZ ? option?.STREET_UA_VPZ : ''
            }` || ''
          }
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
  );
};

export default UkrPost;
