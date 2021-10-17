import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
import { POST_OFFICE_NUMBER } from '../../../../../utils/checkout';
import { CY_CODE_ERR } from '../../../../../configs';
import { RESET } from '../../../../../const/checkout';

const UkrPost = ({ isLightTheme, setFieldValue, errors, touched, values }) => {
  const dispatch = useDispatch();
  const styles = useStyles({
    isLightTheme
  });
  const { t } = useTranslation();

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
      <h3 className={styles.ukrPostTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.selectorInfo}>
        <Autocomplete
          name='region'
          onInputChange={(e, value, reason) => {
            if (reason !== RESET || (reason === RESET && value)) {
              setFieldValue('region', value);
            }
          }}
          noOptionsText={t('delivery.noRegion')}
          onChange={(event, value) => {
            if (value) {
              setFieldValue('region', value.REGION_UA);
              setFieldValue('regionId', value.REGION_ID);
              setFieldValue('district', '');
              setFieldValue('city', '');
              setFieldValue('courierOffice', '');
            } else {
              setFieldValue('region', '');
              setFieldValue('regionId', '');
            }
            setFieldValue('district', '');
            setFieldValue('city', '');
            setFieldValue('courierOffice', '');
          }}
          options={ukrPoshtaRegions}
          inputValue={values.region}
          getOptionLabel={(option) => option?.REGION_UA || ''}
          className={styles.dataInput}
          renderInput={(params) => (
            <TextField
              {...params}
              error={touched.region && !!errors.region}
              label={`${t('delivery.region')} *`}
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
              setFieldValue('district', value);
            }
          }}
          noOptionsText={t('delivery.noDistrict')}
          onChange={(event, value) => {
            if (value) {
              setFieldValue('district', value.DISTRICT_UA);
              setFieldValue('districtId', value.DISTRICT_ID);
            } else {
              setFieldValue('districtId', '');
              setFieldValue('district', '');
            }
            setFieldValue('city', '');
            setFieldValue('courierOffice', '');
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
              label={`${t('delivery.district')} *`}
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
              setFieldValue('city', value);
            }
          }}
          noOptionsText={t('delivery.noCity')}
          onChange={(event, value) => {
            if (value) {
              setFieldValue('city', value.CITY_UA);
              setFieldValue('cityId', value.CITY_ID);
            } else {
              setFieldValue('cityId', '');
              setFieldValue('city', '');
            }
            setFieldValue('courierOffice', '');
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
              label={t('delivery.city')}
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
              setFieldValue('courierOffice', value);
            }
          }}
          noOptionsText={t('delivery.noDepartment')}
          onChange={(event, value) => {
            if (value) {
              setFieldValue(
                'courierOffice',
                `${POST_OFFICE_NUMBER} ${value.POSTCODE}, ${
                  value?.STREET_UA_VPZ ? value?.STREET_UA_VPZ : ''
                }`
              );
            } else {
              setFieldValue('courierOffice', '');
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
              label={t('delivery.department')}
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
