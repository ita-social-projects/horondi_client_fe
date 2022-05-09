import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { messengers } from './const';
import { TEXT_FIELD_VARIANT, RESET } from '../../../../../configs';
import { useStyles } from './worldwide.styles';
import WorldwideService from '../../../../../services/worldwide-delivery.service';

const Worldwide = ({ errors, touched, values, handleChange, setFieldValue }) => {
  const styles = useStyles();
  const { t } = useTranslation();

  const [countryOptions, setCountryOptions] = useState([]);
  const [statesOptions, setStatesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  const [countryInputState, setCountryInput] = useState('');
  const [stateOrProvinceInput, setStateOrProvinceInput] = useState('');

  const handleCityInputChange = (value, reason) => {
    if (reason !== RESET || (reason === RESET && value)) {
      setFieldValue('worldWideCity', value);
    }
  };

  const fetchCountries = async () => {
    const countries = await WorldwideService.getCountries();

    setCountryOptions(countries);
  };

  const fetchStatesByCountry = async (country) => {
    const states = await WorldwideService.getStatesByCountry(country);

    setStatesOptions(states);
  };

  const fetchCitiesByCountryAndState = async (country, state) => {
    const cities = await WorldwideService.getCitiesByCountryAndState(country, state);

    setCitiesOptions(cities);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (values.worldWideCountry) {
      fetchStatesByCountry(values.worldWideCountry);
    } else {
      setFieldValue('stateOrProvince', '');
      setFieldValue('worldWideCity', '');
      setFieldValue('worldWideStreet', '');
      setFieldValue('cityCode', '');
      setStatesOptions([]);
      setCitiesOptions([]);
    }
  }, [values.worldWideCountry]);

  useEffect(() => {
    if (values.stateOrProvince) {
      fetchCitiesByCountryAndState(values.worldWideCountry, values.stateOrProvince);
    } else {
      setFieldValue('worldWideCity', '');
      setFieldValue('worldWideStreet', '');
      setFieldValue('cityCode', '');
      setCitiesOptions([]);
    }
  }, [values.stateOrProvince]);

  return (
    <div className={styles.worldwide}>
      <p className={styles.topUkrpost}>{t('checkout.worldWideDelivery.topUkrpost')}</p>
      <p className={styles.contactBy}>{t('checkout.worldWideDelivery.contactBy')}</p>
      <div className={styles.selectWrapper}>
        <FormControl
          className={styles.formControl}
          error={touched.messenger && !!errors.messenger}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
        >
          <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
            {t('checkout.worldWideDelivery.chooseMessenger')}
          </InputLabel>
          <Select
            className={styles.paymentSelect}
            label={t('checkout.worldWideDelivery.chooseMessenger')}
            name='messenger'
            value={values.messenger}
            onChange={handleChange}
          >
            {messengers.map((messenger) => (
              <MenuItem key={messenger} value={messenger}>
                {messenger}
              </MenuItem>
            ))}
          </Select>
          {touched.messenger && errors.messenger && (
            <div className={styles.error}>{t(errors.messenger)}</div>
          )}
        </FormControl>
        <FormControl>
          <TextField
            className={styles.formControl}
            error={touched.messengerPhone && !!errors.messengerPhone}
            label={t('checkout.worldWideDelivery.messengerPhone')}
            variant={TEXT_FIELD_VARIANT.OUTLINED}
            value={values.messengerPhone}
            name='messengerPhone'
            onChange={handleChange}
          />
          {touched.messengerPhone && errors.messengerPhone && (
            <div className={styles.error}>{t(errors.messengerPhone)}</div>
          )}
        </FormControl>
      </div>
      <h3 className={styles.addressTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.addressWrapper}>
        <Autocomplete
          className={styles.addressInput}
          options={countryOptions}
          value={values.worldWideCountry}
          inputValue={countryInputState}
          onInputChange={(_, value) => setCountryInput(value)}
          onChange={(_, value) => setFieldValue('worldWideCountry', value || '')}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={t('checkout.worldWideDelivery.country')}
              error={touched.worldWideCountry && !!errors.worldWideCountry}
            />
          )}
        />
        {touched.worldWideCountry && errors.worldWideCountry && (
          <div className={styles.error}>{t(errors.worldWideCountry)}</div>
        )}
        <Autocomplete
          className={styles.addressInput}
          options={statesOptions}
          value={values.stateOrProvince}
          inputValue={stateOrProvinceInput}
          onInputChange={(_, value) => setStateOrProvinceInput(value)}
          onChange={(_, value) => setFieldValue('stateOrProvince', value || '')}
          disabled={!values.worldWideCountry}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={t('checkout.worldWideDelivery.state')}
            />
          )}
        />
        <Autocomplete
          className={styles.addressInput}
          options={citiesOptions}
          inputValue={values.worldWideCity}
          onInputChange={(_, value, reason) => {
            handleCityInputChange(value, reason);
          }}
          onChange={(_, value) => setFieldValue('worldWideCity', value || '')}
          disabled={!values.worldWideCountry}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={t('checkout.worldWideDelivery.city')}
              error={touched.worldWideCity && !!errors.worldWideCity}
            />
          )}
        />
        {touched.worldWideCity && errors.worldWideCity && (
          <div className={styles.error}>{t(errors.worldWideCity)}</div>
        )}
        <TextField
          className={styles.addressInput}
          error={touched.worldWideStreet && !!errors.worldWideStreet}
          label={t('checkout.worldWideDelivery.street')}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          value={values.worldWideStreet}
          name='worldWideStreet'
          onChange={handleChange}
          disabled={!values.worldWideCity}
        />
        {touched.worldWideStreet && errors.worldWideStreet && (
          <div className={styles.error}>{t(errors.worldWideStreet)}</div>
        )}
        <TextField
          className={`${styles.addressInput} ${styles.addressInputCode}`}
          error={touched.cityCode && !!errors.cityCode}
          label={t('checkout.worldWideDelivery.cityCode')}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          value={values.cityCode}
          name='cityCode'
          onChange={handleChange}
          disabled={!values.worldWideStreet}
        />
        {touched.cityCode && errors.cityCode && (
          <div className={styles.error}>{t(errors.cityCode)}</div>
        )}
      </div>
    </div>
  );
};

export default Worldwide;
