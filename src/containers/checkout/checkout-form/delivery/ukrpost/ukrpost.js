import React, { useEffect, useState } from 'react';
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
import { POST_OFFICE_NUMBER } from '../../../../../utils/checkout';
import { CY_CODE_ERR } from '../../../../../configs';

const UkrPost = ({ isLightTheme, language, setFieldValue, errors, touched }) => {
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

  const [regionId, setRegionId] = useState('');
  const [region, setRegion] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [district, setDistrict] = useState('');
  const [cityId, setCityId] = useState('');
  const [city, setCity] = useState('');
  const [postOffice, setPostOffice] = useState('');

  useEffect(() => {
    if (regionId) {
      dispatch(getUkrPostDistricts(regionId));
    }
  }, [dispatch, regionId]);

  useEffect(() => {
    if (districtId) {
      dispatch(getUkrPostCities(districtId));
    }
  }, [dispatch, districtId]);

  useEffect(() => {
    if (cityId) {
      dispatch(getUkrPostPostOffices(cityId));
    }
  }, [dispatch, cityId]);

  return (
    <div className={styles.ukrPostContainer}>
      <h3 className={styles.ukrPostTitle}>{CHECKOUT_DELIVERY_TYPES[language].ukrPoshta}</h3>
      <div className={styles.selectorInfo}>
        <Autocomplete
          onInputChange={(e, value) => {
            setRegion(value);
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneRegion}
          onChange={(event, value) => {
            if (value) {
              setRegionId(value.REGION_ID);
              setFieldValue(CHECKOUT_INPUT_FIELD.region, value.REGION_UA);
            } else {
              setRegion('');
              setDistrict('');
              setCity('');
              setPostOffice('');
              setFieldValue(CHECKOUT_INPUT_FIELD.region, '');
            }
          }}
          options={ukrPoshtaRegions}
          inputValue={region}
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
          onInputChange={(e, value) => {
            setDistrict(value);
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDistrict}
          onChange={(event, value) => {
            if (value) {
              setDistrictId(value.DISTRICT_ID);
              setFieldValue(CHECKOUT_INPUT_FIELD.district, value.DISTRICT_UA);
            } else {
              setDistrictId('');
              setCity('');
              setPostOffice('');
              setFieldValue(CHECKOUT_INPUT_FIELD.district, '');
            }
          }}
          disabled={!region}
          options={ukrPoshtaDistricts}
          inputValue={district}
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
          onInputChange={(e, value) => {
            setCity(value);
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
          onChange={(event, value) => {
            if (value) {
              setCityId(value.CITY_ID);
              setFieldValue(CHECKOUT_INPUT_FIELD.city, value.CITY_UA);
            } else {
              setCityId('');
              setPostOffice('');
              setFieldValue(CHECKOUT_INPUT_FIELD.city, '');
            }
          }}
          disabled={!district}
          options={ukrPoshtaCities}
          inputValue={city}
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
          onInputChange={(e, value) => {
            setPostOffice(value);
          }}
          noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneDepartment}
          onChange={(event, value) => {
            if (value) {
              setPostOffice(`${POST_OFFICE_NUMBER} ${value.POSTCODE}, ${value?.STREET_UA_VPZ}`);
              setFieldValue(
                CHECKOUT_INPUT_FIELD.courierOffice,
                `${POST_OFFICE_NUMBER} ${value.POSTCODE}, ${value?.STREET_UA_VPZ}`
              );
            } else {
              setPostOffice('');
              setFieldValue(CHECKOUT_INPUT_FIELD.courierOffice, '');
            }
          }}
          disabled={!city}
          options={ukrPoshtaPostOffices}
          inputValue={postOffice}
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
