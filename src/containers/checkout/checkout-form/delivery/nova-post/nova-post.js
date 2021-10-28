import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import { useStyles } from './nova-post.styles';
import { MATERIAL_UI_COLOR, TEXT_FIELD_VARIANT } from '../../../../../const/material-ui';
import { POSTOMAT } from '../../../../../utils/checkout';
import { CY_CODE_ERR } from '../../../../../configs';
import { RESET } from '../../../../../const/checkout';
import useNovaPost from '../../../../../hooks/use-nova-post';

const NovaPost = ({ isLightTheme, setFieldValue, errors, touched, values }) => {
  const styles = useStyles({
    isLightTheme
  });
  const { t } = useTranslation();

  const [selectedCity, setSelectedCity] = useState(values.city);
  const [{ cities, wareHouses, housesLoading }, refetchCitiesHandler] = useNovaPost(
    values,
    selectedCity
  );

  return (
    <div className={styles.novaPostContainer}>
      <h3 className={styles.novaPostTitle}>{t('delivery.deliveryAddress')}</h3>
      <div className={styles.novaPostData}>
        <div className={styles.selectorInfo}>
          <Autocomplete
            onInputChange={(e, value, reason) => {
              if (reason !== RESET || (reason === RESET && value)) {
                setFieldValue('city', value);
              }
              refetchCitiesHandler.current();
            }}
            noOptionsText={t('delivery.noCity')}
            onChange={(event, value) => {
              if (value) {
                setSelectedCity(value.description);
                setFieldValue('city', value.description);
              } else {
                setSelectedCity('');
                setFieldValue('city', '');
              }
              setFieldValue('courierOffice', '');
            }}
            options={cities}
            inputValue={values.city}
            getOptionLabel={(option) => option?.description || null}
            className={styles.dataInput}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.city && !!errors.city}
                label={`${t('delivery.city')} *`}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: <>{params.InputProps.endAdornment}</>
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
                setFieldValue('courierOffice', value);
              }
            }}
            noOptionsText={t('delivery.noDepartment')}
            onChange={(event, value) => {
              if (value) {
                setFieldValue('courierOffice', value.description);
              } else {
                setFieldValue('courierOffice', '');
              }
            }}
            disabled={!values.city}
            options={_.filter(
              wareHouses,
              (warehouseItem) => !warehouseItem.description.includes(POSTOMAT)
            )}
            inputValue={values.courierOffice}
            getOptionLabel={(option) => option?.description}
            className={styles.dataInput}
            renderInput={(params) => (
              <TextField
                {...params}
                error={touched.courierOffice && !!errors.courierOffice}
                label={`${t('delivery.department')} *`}
                variant={TEXT_FIELD_VARIANT.OUTLINED}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {housesLoading && (
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
