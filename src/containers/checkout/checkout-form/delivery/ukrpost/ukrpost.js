import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from '../nova-post/nova-post.styles';
import {
  getUkrPostDistricts,
  getUkrPostRegions
} from '../../../../../redux/checkout/checkout.actions';
import { TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';
import {
  CHECKOUT_ADDITIONAL_INFORMATION,
  CHECKOUT_INPUT_FIELD,
  CHECKOUT_TEXT_FIELDS
} from '../../../../../translations/checkout.translations';

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

  return (
    <div>
      <div className={styles.selectorInfo}>
        <FormControl
          error={touched.city && !!errors.city}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          className={styles.formControl}
        >
          <Autocomplete
            onInputChange={(e, value) => {
              setRegion(value);
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
            onChange={(event, value) => {
              if (value) {
                setRegionId(value.REGION_ID);
                // setFieldValue(CHECKOUT_INPUT_FIELD.city, value.description);
              } else {
                setRegionId('');
              }
            }}
            options={ukrPoshtaRegions}
            inputValue={region}
            getOptionLabel={(option) => option?.REGION_UA || null}
            // className={styles.dataInput}
            // error={touched.city && !!errors.city}
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
      <div>
        <FormControl
          error={touched.city && !!errors.city}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          className={styles.formControl}
        >
          <Autocomplete
            onInputChange={(e, value) => {
              setDistrict(value);
            }}
            noOptionsText={CHECKOUT_ADDITIONAL_INFORMATION[language].noOneCity}
            onChange={(event, value) => {
              if (value) {
                setDistrictId(value.DISTRICT_ID);
                // setFieldValue(CHECKOUT_INPUT_FIELD.city, value.description);
              } else {
                setDistrictId('');
              }
            }}
            disabled={!regionId}
            options={ukrPoshtaDistricts}
            inputValue={district}
            getOptionLabel={(option) => option?.DISTRICT_UA || null}
            // className={styles.dataInput}
            // error={touched.city && !!errors.city}
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
  );
};

export default UkrPost;
