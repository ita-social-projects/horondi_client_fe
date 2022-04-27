import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { messengers, phones } from './const';
import { TEXT_FIELD_VARIANT } from '../../../../../configs';
import { useStyles } from './worldwide.styles';

const Worldwide = ({ errors, touched, values, handleChange, setFieldValue }) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.worldwide}>
      <p className={styles.topUkrpost}>{t('checkout.worldWideDelivery.topUkrpost')}</p>
      <p className={styles.contactBy}>{t('checkout.worldWideDelivery.contactBy')}</p>
      <div className={styles.selectWrapper}>
        <FormControl
          error={touched.messenger && !!errors.messenger}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          className={styles.formControl}
        >
          <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
            {t('checkout.worldWideDelivery.chooseMessenger')}
          </InputLabel>
          <Select
            label={t('checkout.worldWideDelivery.chooseMessenger')}
            className={styles.paymentSelect}
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
        <FormControl
          error={touched.messengerPhone && !!errors.messengerPhone}
          variant={TEXT_FIELD_VARIANT.OUTLINED}
          className={styles.formControl}
        >
          <InputLabel variant={TEXT_FIELD_VARIANT.OUTLINED}>
            {t('checkout.worldWideDelivery.messengerPhone')}
          </InputLabel>
          <Select
            label={t('checkout.worldWideDelivery.messengerPhone')}
            name='messengerPhone'
            value={values.messengerPhone}
            onChange={handleChange}
          >
            {phones.map((phone) => (
              <MenuItem key={phone} value={phone}>
                {phone}
              </MenuItem>
            ))}
          </Select>
          {touched.messengerPhone && errors.messengerPhone && (
            <div className={styles.error}>{t(errors.messengerPhone)}</div>
          )}
        </FormControl>
      </div>
      <h3 className={styles.addressTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.addressWrapper}>
        <Autocomplete
          className={styles.addressInput}
          options={['country1', 'country2']}
          inputValue={values.worldWideCountry}
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
          options={['state1', 'state2']}
          inputValue={values.stateOrProvince}
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
          options={['city1', 'city2']}
          inputValue={values.worldWideCity}
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
        <Autocomplete
          className={styles.addressInput}
          options={['street1', 'street2']}
          inputValue={values.worldWideStreet}
          onChange={(_, value) => setFieldValue('worldWideStreet', value || '')}
          disabled={!values.worldWideCity}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={t('checkout.worldWideDelivery.street')}
              error={touched.worldWideStreet && !!errors.worldWideStreet}
            />
          )}
        />
        {touched.worldWideStreet && errors.worldWideStreet && (
          <div className={styles.error}>{t(errors.worldWideStreet)}</div>
        )}
        <Autocomplete
          className={`${styles.addressInput} ${styles.addressInputCode}`}
          options={['111', '222']}
          inputValue={values.cityCode}
          onChange={(_, value) => setFieldValue('cityCode', value || '')}
          disabled={!values.worldWideStreet}
          renderInput={(params) => (
            <TextField
              {...params}
              variant={TEXT_FIELD_VARIANT.OUTLINED}
              label={t('checkout.worldWideDelivery.cityCode')}
              error={touched.cityCode && !!errors.cityCode}
            />
          )}
        />
        {touched.cityCode && errors.cityCode && (
          <div className={styles.error}>{t(errors.cityCode)}</div>
        )}
      </div>
    </div>
  );
};

export default Worldwide;
